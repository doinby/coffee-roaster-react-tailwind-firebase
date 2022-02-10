import React from 'react';

export default function CollectionArticle({title, description}) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
