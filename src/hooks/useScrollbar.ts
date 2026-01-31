import { useEffect } from 'react';

export function useScrollbar() {
  useEffect(() => {
    const overlay = document.createElement('div');
    overlay.className = 'scrollbar-overlay';
    overlay.innerHTML = '<div class="scrollbar-thumb"></div>';
    document.body.appendChild(overlay);

    const thumb = overlay.querySelector('.scrollbar-thumb') as HTMLElement;
    let hideT: ReturnType<typeof setTimeout> | null = null;
    let raf: number | null = null;
    let isDragging = false;

    function clamp(v: number, min: number, max: number) {
      return Math.max(min, Math.min(max, v));
    }

    function updateThumb() {
      raf = null;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight;
      const clientHeight = doc.clientHeight;
      const track = overlay.clientHeight;
      const maxScroll = Math.max(1, scrollHeight - clientHeight);

      const thumbH = clamp((clientHeight / scrollHeight) * track / 3, 14, track);
      const maxTop = track - thumbH;
      const top = (scrollTop / maxScroll) * maxTop;

      thumb.style.height = `${thumbH}px`;
      thumb.style.top = `${top}px`;
    }

    function scheduleUpdate() {
      if (raf) return;
      raf = requestAnimationFrame(updateThumb);
    }

    function showThenHide() {
      overlay.classList.add('is-visible');
      if (hideT) clearTimeout(hideT);
      hideT = setTimeout(() => {
        if (!isDragging) overlay.classList.remove('is-visible');
      }, 700);
    }

    // Клик по треку - прыжок
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        const rect = overlay.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const doc = document.documentElement;
        const scrollHeight = doc.scrollHeight;
        const clientHeight = doc.clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        const targetScroll = (clickY / overlay.clientHeight) * maxScroll;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    });

    // Драг ползунка
    let startY = 0;
    let startScroll = 0;

    thumb.addEventListener('mousedown', (e) => {
      isDragging = true;
      startY = e.clientY;
      startScroll = window.scrollY;
      overlay.classList.add('is-visible');
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight;
      const clientHeight = doc.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const track = overlay.clientHeight;
      const thumbH = parseFloat(thumb.style.height);
      const maxTop = track - thumbH;
      const scrollDelta = (deltaY / maxTop) * maxScroll;
      window.scrollTo({ top: startScroll + scrollDelta });
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        showThenHide();
      }
    });

    scheduleUpdate();
    window.addEventListener('scroll', () => {
      scheduleUpdate();
      showThenHide();
    }, { passive: true });
    
    window.addEventListener('resize', () => {
      scheduleUpdate();
      showThenHide();
    }, { passive: true });

    return () => {
      overlay.remove();
      if (raf) cancelAnimationFrame(raf);
      if (hideT) clearTimeout(hideT);
    };
  }, []);
}
