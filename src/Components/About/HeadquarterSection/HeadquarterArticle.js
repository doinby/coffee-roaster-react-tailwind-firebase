import React from 'react';

export default function HeadquarterArticle({imgPath, location, address}) {
  return (
    <article
      className='headquarter-article'
      // class='flex flex-col gap-8 items-center'
      class='py-10 text-center'
    >
      <img src={imgPath} alt={location} />
      <h3 class='m-0 font-serif text-3xl text-black/90'>{location}</h3>
      <address class='flex flex-col gap-2'>
        {address.map((info) => (
          <p key={info} class='m-0 not-italic text-lg text-black/80'>
            {info}
          </p>
        ))}
      </address>
    </article>
  );
}
