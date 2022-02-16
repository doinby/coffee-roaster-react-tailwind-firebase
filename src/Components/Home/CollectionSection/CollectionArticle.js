import React from 'react';

export default function CollectionArticle({img, title, description}) {
  return (
    <article class='flex flex-col gap-4 items-center'>
      <img src={img} alt={title} class='max-h-32' />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
