import React from 'react';

// Components
import HeroSection from '../Components/HeroSection';
import CollectionSection from '../Components/Home/CollectionSection/CollectionSection';
import WhyUsSection from '../Components/Home/WhyUsSection/WhyUsSection';
import HowSection from '../Components/Home/HowSection/HowSection';

export default function Home() {
  return (
    <main class='flex flex-col gap-32 my-4'>
      <HeroSection
        id='hero'
        title='Great coffee made simple.'
        description='Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.'
        background='home-hero-default'
        isBtnHidden={false}
      />
      <CollectionSection id='collection' />
      <WhyUsSection id='why-us' />
      <HowSection id='how-it-works' />
    </main>
  );
}
