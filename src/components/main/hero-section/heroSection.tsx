import style from './heroSection.module.css'
import sphereGif from '../../../assets/media/sphere.gif'

export const HeroSection = () => {

  return (
    <section className={style.sphereBg}>
        <img className={style.sphereGif} src={sphereGif} alt="background with sphere" />
        <article className={`${style.mainArticle} ${style.glass}`}>
          <div className={`${style.headingDiv} appear`}>
            <h1 className={style.heading}>
              <span className={style.heading1}>безопасный</span>
              <span className={style.heading2}>стабильный</span>
              <span className={style.heading3}>vpn сервис</span>
            </h1>
          </div>
          <button className={`${style.download} appear`}>
            <span className={style.downloadText}>:: установить VPN ::</span>
          </button>
        </article>
      </section>
  )
}