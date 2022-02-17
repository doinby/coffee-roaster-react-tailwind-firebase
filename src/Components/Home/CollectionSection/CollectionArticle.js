import React from 'react';

export default function CollectionArticle({img, title, description}) {
  return (
    <article class='flex flex-col gap-4 items-center'>
      <img src={img} alt={title} class='max-h-36' />
      <h2 class='m-0 font-serif'>{title}</h2>
      <p class='text-black/80'>{description}</p>
    </article>
  );
}
