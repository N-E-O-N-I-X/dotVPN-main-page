import style from './centerHeader.module.css';

export const CenterHeader = () => {

  return (
    <nav className={style.centerHeader}>
        <a className={`${style.focusLine} ${style.centerHeaderLink}`} href="#download">:: установка ::</a>
        <a className={style.logoLink} href="">
          <svg className={style.logoSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>dotvpn logo</title>
            <path className={style.logoSvgPath} fill="currentColor" strokeWidth="1" stroke="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"/>
          </svg>
        </a>
        <a className={`${style.focusLine} ${style.centerHeaderLink}`} href="#">:: поддержка ::</a>
      </nav>
  )
}