import React from 'react';

export default function HeroSection({id}) {
  return (
    <section>
      <section
        id={id}
        class='flex flex-col justify-center items-center gap-8 px-4 h-[500px] rounded-lg bg-hero-default text-center text-white'
      >
        <h2 class='text-4xl'>Great coffee made simple.</h2>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button class='py-2 px-4 rounded-md bg-teal-600'>
          Create your plan
        </button>
      </section>
    </section>
  );
}
