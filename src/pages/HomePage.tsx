import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import PillarsSection from '../components/PillarsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <PillarsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;