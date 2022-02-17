import React from 'react';

// Assets
import qualityImg from '../../../src/assets/about/mobile/image-quality.jpg';

export default function QualitySection() {
  return (
    <section class='relative grid grid-cols-1 grid-rows-[7em_1fr] rounded-2xl bg-about-quality-default bg-no-repeat bg-cover text-center'>
      <img
        src={qualityImg}
        class='absolute top-[-64px] place-self-center max-w-[85%] rounded-lg'
        alt='Uncompromising quality'
      />
      <div class='row-start-2 flex flex-col gap-8 items-center pb-16 text-center'>
        <h1 class='m-0 font-serif text-[1.75em] text-white'>
          Uncompromising quality
        </h1>
        <p class='m-0 text-white/60'>
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
