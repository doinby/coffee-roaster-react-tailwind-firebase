import React from 'react';

// Assets
import qualityImg from '../../../src/assets/about/mobile/image-quality.jpg';

export default function QualitySection() {
  return (
    <section class='relative grid grid-cols-1 grid-rows-[7em_1fr] items-center px-4 py-16 rounded-2xl bg-about-quality-default text-white'>
      <img
        src={qualityImg}
        class='absolute top-[-64px] place-self-center max-w-[85%]'
        alt='Uncompromising quality'
      />
      <div class='row-start-2 flex flex-col gap-8 items-center text-center'>
        <h3 class='text-2xl'>Uncompromising quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
}
