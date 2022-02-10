import React from 'react';
import CollectionSection from './CollectionSection';
import HeroSection from './HeroSection';

export default function MainContainer() {
  return (
    <main class='flex flex-col gap-4 my-4'>
      <HeroSection id='hero' />
      <CollectionSection id='collection' />
    </main>
  );
}
