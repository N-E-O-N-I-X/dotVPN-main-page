import style from './header.module.css';

import { LeftHeader } from './left-header/leftHeader';
import { CenterHeader } from './center-header/centerHeader';
import { RightHeader } from './right-header/rightHeader';

export const Header = () => {

  return (
    <header className={style.header}>
      <LeftHeader />
      <CenterHeader />
      <RightHeader />
    </header>
  )
}