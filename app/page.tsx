'use client';

import Header from '@/components/header';
import HeroSlider from '@/components/hero-slider';
import SignatureDishes from '@/components/signature-dishes';
import MenuSection from '@/components/menu-section';
import Gallery from '@/components/gallery';
import AboutUs from '@/components/about-us';
import ScrollingFoodCards from '@/components/scrolling-food-cards';
import Footer from '@/components/footer';
import SplashScreen from '@/components/splash-screen';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        <HeroSlider />
        <ScrollReveal variant="fadeUp" delay={100}>
          <SignatureDishes />
        </ScrollReveal>
        <ScrollReveal variant="scaleIn">
          <MenuSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={80}>
          <ScrollingFoodCards />
        </ScrollReveal>
        <ScrollReveal variant="scaleIn" delay={120}>
          <Gallery />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={100}>
          <AboutUs />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
