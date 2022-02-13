import React from 'react';

// Components
import HeroSection from '../../src/Components/HeroSection.js';

export default function About() {
  return (
    <div id='about'>
      <HeroSection
        title='About us'
        description='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
  coffee from around the world. We have since been dedicated to bring the perfect cup - from 
  bean to brew - in every shipment.'
        background='about-hero-default'
        isBtnHidden='true'
      />
    </div>
  );
}
