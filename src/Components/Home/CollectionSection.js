import React from 'react';

// Components
import CollectionArticle from './CollectionArticle';

// Assets
import granEspressoImg from '../../../src/assets/home/desktop/image-gran-espresso.png';
import planaltoImg from '../../../src/assets/home/desktop/image-planalto.png';
import piccolloImg from '../../../src/assets/home/desktop/image-piccollo.png';
import dancheImg from '../../../src/assets/home/desktop/image-danche.png';

export default function CollectionSection({id}) {
  return (
    <section id={id} class='flex flex-col gap-12 text-center'>
      <h2 class='text-4xl'>Our Collection</h2>
      <CollectionArticle
        img={granEspressoImg}
        title='Gran Espresso'
        description='Light and flavorful blend with cocoa and black pepper for an intense experience'
      />
      <CollectionArticle
        img={planaltoImg}
        title='Planalto'
        description='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
      />
      <CollectionArticle
        img={piccolloImg}
        title='Piccollo'
        description='Mild and smooth blend featuring notes of toasted almond and dried cherry'
      />
      <CollectionArticle
        img={dancheImg}
        title='Danche'
        description='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
      />
    </section>
  );
}
