import React from 'react';

export default function FeatureCard({id, img, title, description}) {
  return (
    <div
      id={id}
      className='feature-card'
      class='flex flex-col items-center gap-8 py-16 px-8 rounded-lg bg-dark-cyan text-white'
    >
      <img src={img} alt={title} class='m-0 mb-8' />
      <h2 class='m-0 font-serif text-white'>{title}</h2>
      <p class='m-0 text-white/80'>{description}</p>
    </div>
  );
}
