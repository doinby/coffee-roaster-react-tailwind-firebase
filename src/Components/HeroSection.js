import React from 'react';

export default function HeroSection({
  id,
  title,
  description,
  background,
  isBtnHidden,
  btnContent,
}) {
  const renderBtn = isBtnHidden ? 'hidden' : 'block';

  return (
    <section
      id={id}
      class={`gap-10 px-6 py-28 rounded-lg ${background} bg-no-repeat bg-cover bg-center text-white text-center`}
    >
      <h1 class='m-0 font-serif text-[1.75em] text-white'>{title}</h1>
      <p class='m-0 text-white/80'>{description}</p>
      <button
        class={`${renderBtn} py-4 px-8 rounded-md bg-dark-cyan font-serif text-lg`}
      >
        {btnContent}
      </button>
    </section>
  );
}
