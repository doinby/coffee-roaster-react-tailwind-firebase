import React from 'react';

export default function HeadquarterArticle({imgPath, location, address}) {
  return (
    <div
      className='headquarter-article'
      class='flex flex-col gap-8 items-center'
    >
      <img src={imgPath} alt={location} />
      <h4>{location}</h4>
      <address>
        {address.map((info) => (
          <p key={info}>{info}</p>
        ))}
      </address>
    </div>
  );
}
