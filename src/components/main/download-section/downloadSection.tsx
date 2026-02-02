import style from './downloadSection.module.css'


export const DownloadSection = () => {

  return (
    <section className={`${style.downloadSection} appear`} id="download">
        <h2 className={style.sectionHeading}>
          &gt; как установить_
        </h2>
        <div className={style.downloadGuide}>
          <article className={`${style.guideStep} fade-up`}>
            <h3>&gt; 1</h3>
            <div>
            </div>
          </article>
          <article className={`${style.guideStep} fade-up`}>
            <h3>&gt; 2</h3>
            <div>
            </div>
          </article>
        </div>
      </section>
  )
}