import React from 'react';

export default function CollectionArticle({img, title, description}) {
  return (
    <article class='flex flex-col items-center'>
      <img src={img} alt={title} class='max-h-32' />
      <h2 class='text-3xl'>{title}</h2>
      <p class='max-w-[80%]'>{description}</p>
    </article>
  );
}
