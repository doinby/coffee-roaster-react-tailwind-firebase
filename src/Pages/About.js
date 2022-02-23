import React from 'react';

// Components
import HeroSection from '../Components/shared/HeroSection.js';
import CommitmentSection from '../Components/About/CommitmentSection.js';
import HeadquarterSection from '../Components/About/HeadquarterSection/HeadquarterSection.js';
import QualitySection from '../Components/About/QualitySection.js';

export default function About() {
  return (
    <main id='about' class='flex flex-col gap-32 my-4'>
      <HeroSection
        title='About us'
        description='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
  coffee from around the world. We have since been dedicated to bring the perfect cup - from 
  bean to brew - in every shipment.'
        background='bg-about-hero-default'
        isBtnHidden='true'
      />
      <CommitmentSection />
      <QualitySection />
      <HeadquarterSection id='headquarters' />
    </main>
  );
}
