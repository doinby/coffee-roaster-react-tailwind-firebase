import React from 'react';

export default function FeatureCard({id, img, title, description}) {
  return (
    <div
      id={id}
      className='feature-card'
      class='flex flex-col items-center gap-4 py-12 px-6 rounded-lg bg-teal-600 text-white'
    >
      <img src={img} alt={title} />
      <h3 class='text-2xl'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
