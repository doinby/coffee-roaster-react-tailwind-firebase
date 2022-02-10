import React from 'react';
import CollectionArticle from './CollectionArticle';

export default function CollectionSection({id}) {
  return (
    <section id={id} class='flex flex-col items-center'>
      <h2 class='text-4xl'>Our Collection</h2>
      <CollectionArticle
        title='Gran Espresso'
        description='Light and flavorful blend with cocoa and black pepper for an intense experience'
      />
      <CollectionArticle
        title='Planalto'
        description='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
      />
      <CollectionArticle
        title='Piccollo'
        description='Mild and smooth blend featuring notes of toasted almond and dried cherry'
      />
      <CollectionArticle
        title='Danche'
        description='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
      />
    </section>
  );
}
