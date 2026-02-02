import style from './benefitsSection.module.css'


export const BenefitsSection = () => {

  return (
    <section className={`${style.benefitsSection} appear`}>
        <h2 className={style.sectionHeading}>
          &gt; создан для ...
        </h2>
        <div className={style.gridDiv}>
          <article className={`fade-up`}>
            <h3>1</h3>
          </article>
          <article className={`fade-up`}>
            <h3>2</h3>
          </article>
          <article className={`fade-up`}>
            <h3>3</h3>
          </article>
          <article className={`fade-up`}>
            <h3>4</h3>
          </article>
          <article className={`fade-up`}>
            <h3>5</h3>
          </article>
          <article className={`fade-up`}>
            <h3>6</h3>
          </article>
        </div>
      </section>
  )
}