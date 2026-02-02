import style from './benefitsSection.module.css'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export const BenefitsSection = () => {
  const { containerRef, visibleItems } = useScrollAnimation(6);

  return (
    <section className={`${style.benefitsSection} appear-visible`}>
      <h2 className={style.sectionHeading}>
        &gt; создан для ...
      </h2>
      <div className={style.gridDiv} ref={containerRef}>
        <article 
          data-index="0"
          className={visibleItems[0] ? 'fade-up-visible' : 'fade-up-hidden'}
        >
          <h3>1</h3>
        </article>
        <article 
          data-index="1"
          className={visibleItems[1] ? 'fade-up-visible' : 'fade-up-hidden'}
        >
          <h3>2</h3>
        </article>
        <article 
          data-index="2"
          className={visibleItems[2] ? 'fade-up-visible' : 'fade-up-hidden'}
        >
          <h3>3</h3>
        </article>
        <article 
          data-index="3"
          className={visibleItems[3] ? 'fade-up-visible' : 'fade-up-hidden'}
        >
          <h3>4</h3>
        </article>
        <article 
          data-index="4"
          className={visibleItems[4] ? 'fade-up-visible' : 'fade-up-hidden'}
        >
          <h3>5</h3>
        </article>
        <article 
          data-index="5"
          className={visibleItems[5] ? 'fade-up-visible' : 'fade-up-hidden'}
        >
          <h3>6</h3>
        </article>
      </div>
    </section>
  )
}
