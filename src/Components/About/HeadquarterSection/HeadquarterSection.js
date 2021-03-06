import React from 'react';

// Components
import HeadquarterArticle from './HeadquarterArticle';

// Assets
import ukImg from '../../../../src/assets/about/desktop/illustration-uk.svg';
import canadaImg from '../../../../src/assets/about/desktop/illustration-canada.svg';
import australiaImg from '../../../../src/assets/about/desktop/illustration-australia.svg';

export default function HeadquarterSection({id}) {
  return (
    <section class='text-center'>
      <h2 class='m-0 font-serif text-black/50'>Our Headquarters</h2>
      <HeadquarterArticle
        imgPath={ukImg}
        location='United Kingdom'
        address={['68 Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425']}
      />
      <HeadquarterArticle
        imgPath={canadaImg}
        location='Canada'
        address={[
          '1528 Eglinton Avenue',
          'Toronto',
          'Ontario M4P 1A6',
          '+1 416 485 2997',
        ]}
      />
      <HeadquarterArticle
        imgPath={australiaImg}
        location='Australia'
        address={[
          '36 Swanston Street',
          'Kewell',
          'Victoria',
          '+61 4 9928 3629',
        ]}
      />
    </section>
  );
}
