import React from 'react';

// Components
import FeatureCard from './FeatureCard';

// Assets
import coffeeBeanImg from '../../../../src/assets/home/desktop/icon-coffee-bean.svg';
import giftImg from '../../../../src/assets/home/desktop/icon-gift.svg';
import truckImg from '../../../../src/assets/home/desktop/icon-truck.svg';

export default function WhyUsSection({id}) {
  return (
    <section
      id={id}
      class='grid grid-cols-1 grid-rows-3 items-center gap-12 relative py-16 rounded-2xl bg-slate-800/95 text-white'
    >
      <div className='description' class='flex flex-col gap-8 items-center'>
        <h2 class='text-2xl'>Why choose us?</h2>
        <p class='max-w-[80%]'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div
        className='feature-card-container'
        class='row-start-2 flex flex-col gap-8 absolute top-0 px-8 '
      >
        <FeatureCard
          img={coffeeBeanImg}
          title='Best quality'
          description='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
        />
        <FeatureCard
          img={giftImg}
          title='Exclusive benefits'
          description='Special offers and swag when you subscribe, including 30% off your first shipment.'
        />
        <FeatureCard
          img={truckImg}
          title='Free shipping'
          description='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
        />
      </div>
    </section>
  );
}
