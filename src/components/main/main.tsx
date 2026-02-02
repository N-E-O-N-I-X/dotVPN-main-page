import style from './main.module.css';

import { HeroSection } from './hero-section/heroSection';
import { BenefitsSection } from './benefits-section/benefitsSection';
import { DownloadSection } from './download-section/downloadSection';

export const Main = () => {
  return (
    <main className={style.main}>
      <HeroSection />
      <BenefitsSection />
      <DownloadSection />
    </main>
  )
}