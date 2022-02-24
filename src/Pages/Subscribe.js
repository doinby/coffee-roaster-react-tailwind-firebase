import React from 'react';

import HeroSection from '../../src/Components/Shared/HeroSection.js';
import HowSection from '../Components/Subscribe/HowSection.js';
import SelectOrderSection from '../Components/Subscribe/SelectOrderSection.js';

export default function Subscribe() {
  return (
    <main>
      <HeroSection
        id='hero'
        title='Create a plan'
        description='Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door.'
        background='bg-subscribe-hero-default'
        isBtnHidden={true}
      />

      <HowSection id='how-it-works' />

      <SelectOrderSection id='select-order-option' />
    </main>
  );
}
