import React from 'react';

export default function HeroSection({
  id,
  title,
  content,
  description,
  isBtnHidden,
}) {
  const renderBtn = isBtnHidden ? 'hidden' : 'block';

  return (
    <section
      id={id}
      class='flex flex-col justify-center items-center gap-8 px-4 h-[500px] rounded-lg bg-hero-default text-center text-white'
    >
      <h2 class='text-4xl'>{title}</h2>
      <p class='max-w-[80%]'>{description}</p>
      <button class={`${renderBtn} py-2 px-4 rounded-md bg-teal-600`}>
        Create your plan
      </button>
    </section>
  );
}
