import React from 'react';

export default function HowArticle({subTitle, title, description, twClasses}) {
  return (
    <article class={`${twClasses} text-center my-4 text-white`}>
      <h3 class='text-[4rem] text-pale-orange'>{subTitle}</h3>
      <h4 class='text-2xl text-white'>{title}</h4>
      <p>{description}</p>
    </article>
  );
}
