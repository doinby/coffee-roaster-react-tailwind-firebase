import React from 'react';

export default function HowArticle({title, subTitle, description}) {
  return (
    <article class='flex flex-col gap-4 items-center'>
      <h4>{title}</h4>
      <h5>{subTitle}</h5>
      <p>{description}</p>
    </article>
  );
}
