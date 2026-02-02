import style from './main.module.css';

import { MainArticle } from './main-article/mainArticle';

export const Main = () => {
  return (
    <main className={style.main}>
      <MainArticle />
    </main>
  )
}