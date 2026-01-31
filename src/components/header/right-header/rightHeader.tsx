import { useState } from 'react';
import style from './rightHeader.module.css';

export const RightHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.rightHeader}>
      <button className={style.downloadBtn}>
        <svg className={style.downloadBtnSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <title>Download Icon</title>
          <path className={style.downloadBtnSvgPath} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/>
        </svg>
      </button>
      
      <button 
        id="burgerBtn" 
        className={style.burgerBtn}
        onClick={() => setIsOpen(true)}
      >
        <svg className={style.burgerBtnSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <title>Menu-burger Icon</title>
          <path className={style.burgerBtnSvgPath} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6.001h18m-18 6h18m-18 6h18"/>
        </svg>
      </button>
      
      {isOpen && (
        <div id="burger" className={`${style.burgerContainer} ${style.show}`}>
          <div className={style.burgerWindow}>
            <button 
              className={style.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            <ul className={style.burgerList}>
              <li className={style.burgerItem}>
                <a href="#" onClick={() => setIsOpen(false)}>:: главная ::</a>
              </li>
              <li className={style.burgerItem}>
                <a href="#download" onClick={() => setIsOpen(false)}>:: установка ::</a>
              </li>
              <li className={style.burgerItem}>
                <a href="#" onClick={() => setIsOpen(false)}>:: поддержка ::</a>
              </li>
            </ul>
          </div>
          <div 
            className={style.overlay}
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};
