import React from 'react';

export default function HowArticle({title, subTitle, description}) {
  return (
    <article class='flex flex-col gap-4 items-center'>
      <h4 class='text-5xl'>{title}</h4>
      <h5 class='text-3xl'>{subTitle}</h5>
      <p class='max-w-[80%]'>{description}</p>
    </article>
  );
}
