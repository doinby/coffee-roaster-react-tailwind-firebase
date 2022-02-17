import React from 'react';

export default function HowArticle({title, subTitle, description}) {
  return (
    <article class='text-center my-4 '>
      <h3 class='m-0 font-serif text-[5rem] text-pale-orange'>{title}</h3>
      <h4 class='m-0 font-serif text-[1.75rem]'>{subTitle}</h4>
      <p class='m-0 text-black/80'>{description}</p>
    </article>
  );
}
