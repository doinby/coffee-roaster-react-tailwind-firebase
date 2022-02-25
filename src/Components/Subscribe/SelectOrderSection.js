import React, {useState} from 'react';
import DaisyUICollapse_RemoveAtBuild from './DaisyUICollapse_RemoveAtBuild';

// Components
import SelectOrderArticle from './SelectOrderArticle';

export default function SelectOrderSection({id}) {
  // Grind Options Article
  const grindOptionTitle = 'How do you drink your coffee?';
  const grindList = {
    Capsule: 'Compatible with Nespresso systems and similar brewers',
    Filter: 'For pour over or drip methods like Aeropress, Chemex, and V60',
    Espresso:
      'Dense and finely ground beans for an intense, flavorful experience',
  };
  const [selectedGrind, setSelectedGrind] = useState();

  // Coffee Types Article
  const coffeeTypeTitle = 'What type of coffee?';
  const coffeeTypeList = {
    SingleOrigin:
      'Distinct, high quality coffee from a specific family-owned farm',
    Decaf: 'Just like regular coffee, except the caffeine has been removed',
    Blended:
      'Combination of two or three dark roasted beans of organic coffees',
  };
  const [selectedType, setSelectedType] = useState();

  function handleClick(e) {
    // e.preventDefault();
    // Get button element ONLY and not its children
    // console.log(e.currentTarget.id);
  }

  return (
    <section id={id} class='mx-0 w-full text-black'>
      <SelectOrderArticle
        name='Grind Options'
        title={grindOptionTitle}
        btnData={Object.entries(grindList)}
        onClick={handleClick}
      />
      <SelectOrderArticle
        name='Coffee Types'
        title={coffeeTypeTitle}
        btnData={Object.entries(coffeeTypeList)}
        onClick={handleClick}
      />
    </section>
  );
}
