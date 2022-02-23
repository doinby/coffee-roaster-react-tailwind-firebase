import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Components
import MenuItemLink from './MenuItemLink';

// Assets
import logoImg from '../../../src/assets/shared/desktop/logo.svg';
import hamburgerImg from '../../../src/assets/shared/mobile/icon-hamburger.svg';

export default function Header() {
  const [dropdownState, setDropdownState] = useState('hidden');

  function toggleHamburger(e) {
    e.preventDefault();
    setDropdownState((prevState) =>
      prevState === 'hidden' ? 'flex' : 'hidden'
    );
  }

  return (
    <header class='relative flex flex-row justify-between'>
      {/* Logo */}

      <Link id='logo' to='/' class='flex'>
        <button role='link'>
          <img src={logoImg} class='h-5' alt="Coffee Roasters' Logo" />
        </button>
      </Link>

      {/* Default Mobile Screen */}
      <button class='p-4 pr-0 sm:hidden' onClick={toggleHamburger}>
        <img src={hamburgerImg} class='h-4' alt='Hamburger Menu' />
      </button>
      <nav
        id='for-mobile dropdown-menu'
        class={`${dropdownState} absolute right-0 top-12 flex-col gap-8 px-4 py-8 bg-dark-grey text-white sm:hidden`}
      >
        <MenuItemLink linkTo='/' content='Home' />
        <MenuItemLink linkTo='/about' content='About us' />
        <MenuItemLink linkTo='/create-your-plan' content='Create your plan' />
      </nav>

      {/* Ipad Screen & Up */}
      <nav id='for-non-mobile' class='hidden sm:flex sm:gap-4 md:gap-8'>
        <MenuItemLink linkTo='/' content='Home' />
        <MenuItemLink linkTo='/about' content='About us' />
        <MenuItemLink linkTo='/create-your-plan' content='Create your plan' />
      </nav>
    </header>
  );
}
