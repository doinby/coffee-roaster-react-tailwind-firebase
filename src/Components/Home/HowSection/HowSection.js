import React from 'react';
import HowArticle from './HowArticle';

export default function HowSection({id}) {
  return (
    <section id={id} class='flex flex-col gap-8 items-center text-center'>
      <h3>How it works</h3>
      <HowArticle
        title='01'
        subTitle='Pick your coffee'
        description='Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out.'
      />
      <HowArticle
        title='02'
        subTitle='Choose the frequency'
        description='Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.'
      />
      <HowArticle
        title='03'
        subTitle='Receive and enjoy!'
        description='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.'
      />
      <button class='py-2 px-4 rounded-md bg-dark-cyan text-white'>
        Create your plan
      </button>
    </section>
  );
}
