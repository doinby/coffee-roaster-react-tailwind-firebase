import React from 'react';

// Components
import HeroSection from '../Components/shared/HeroSection';
import CollectionSection from '../Components/Home/CollectionSection/CollectionSection';
import WhyUsSection from '../Components/Home/WhyUsSection/WhyUsSection';
import HowSection from '../Components/Home/HowSection/HowSection';

export default function Home() {
  return (
    <main>
      <HeroSection
        id='hero'
        title='Great coffee made simple.'
        description='Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.'
        background='bg-home-hero-default'
        isBtnHidden={false}
        btnContent='Create your plan'
      />
      <CollectionSection id='collection' />
      <WhyUsSection id='why-us' />
      <HowSection id='how-it-works' />
    </main>
  );
}
