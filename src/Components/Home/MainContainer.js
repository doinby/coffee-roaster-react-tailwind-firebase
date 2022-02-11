import React from 'react';

// Components
import HeroSection from './HeroSection';
import CollectionSection from './CollectionSection/CollectionSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import HowSection from './HowSection/HowSection';

export default function MainContainer() {
  return (
    <main class='flex flex-col gap-32 my-4'>
      <HeroSection id='hero' />
      <CollectionSection id='collection' />
      <WhyUsSection id='why-us' />
      <HowSection id='how-it-works' />
    </main>
  );
}
