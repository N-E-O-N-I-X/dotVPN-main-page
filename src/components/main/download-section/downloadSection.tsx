import style from './downloadSection.module.css'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export const DownloadSection = () => {
  const { containerRef, visibleItems } = useScrollAnimation(2);

  return (
    <section className={`${style.downloadSection} appear-visible`} id="download">
      <h2 className={style.sectionHeading}>
        &gt; как установить_
      </h2>
      <div className={style.downloadGuide} ref={containerRef}>
        <article 
          data-index="0"
          className={`${style.guideStep} ${visibleItems[0] ? 'fade-up-visible' : 'fade-up-hidden'}`}
        >
          <h3>&gt; 1</h3>
          <div>
          </div>
        </article>
        <article 
          data-index="1"
          className={`${style.guideStep} ${visibleItems[1] ? 'fade-up-visible' : 'fade-up-hidden'}`}
        >
          <h3>&gt; 2</h3>
          <div>
          </div>
        </article>
      </div>
    </section>
  )
}
