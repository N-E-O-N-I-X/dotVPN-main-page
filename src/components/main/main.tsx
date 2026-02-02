import style from './main.module.css';

import { HeroSection } from './hero-section/heroSection';
import { BenefitsSection } from './benefits-section/benefitsSection';

export const Main = () => {
  return (
    <main className={style.main}>
      <HeroSection />
      <BenefitsSection />
    </main>
  )
}