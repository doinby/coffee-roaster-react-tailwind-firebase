import React from 'react';

// Components
import StepArticle from './HowArticle';

export default function HowSection({id}) {
  return (
    <section id={id} class='relative mx-0 px-8 py-16 rounded-lg bg-black'>
      <StepArticle
        subTitle='01'
        title='Pick your coffee'
        description="Select from our evolving range of artisan coffees. Our beans are ethically
        sourced and we pay fair prices for them. There's new coffees in all profiles
        every month for you to try out."
      />
      <StepArticle
        subTitle='02'
        title='Choose the frequency'
        description='Customize your order frequency, quantity, even your roast style and grind type.
  Pause, skip or cancel your subscription with no commitment through our online portal.'
      />
      <StepArticle
        twClasses='mb-12' // Fix bottom padding looking shorter than top
        subTitle='03'
        title='Receive and enjoy!'
        description='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
  world-class coffees curated to provide a distinct tasting experience.'
      />
    </section>
  );
}
