import React from 'react';

export default function HeroSection({
  id,
  title,
  description,
  background,
  isBtnHidden,
}) {
  const renderBtn = isBtnHidden ? 'hidden' : 'block';

  return (
    <section
      id={id}
      class={`flex flex-col justify-center items-center gap-8 px-4 py-28 rounded-lg ${background} bg-no-repeat bg-cover bg-center text-center text-white`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button class={`${renderBtn} py-2 px-4 rounded-md bg-dark-cyan`}>
        Create your plan
      </button>
    </section>
  );
}
