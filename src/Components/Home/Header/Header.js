import React, {useState} from 'react';

import hamburgerMenu from '../../../../src/assets/shared/mobile/icon-hamburger.svg';
import MenuItemLink from './MenuItemLink';

export default function Header() {
  const [dropdownState, setDropdownState] = useState('hidden');

  function toggleHamburger(e) {
    e.preventDefault();
    setDropdownState((prevState) =>
      prevState === 'hidden' ? 'flex' : 'hidden'
    );
  }

  return (
    <header>
      <div
        className='navbar sm-up'
        class='hidden sm:flex justify-between items-center'
      >
        <div className='logo'>
          <h1 class='text-2xl font-bold'>coffeeroasters</h1>
        </div>
        <ul className='menu-list' class='flex gap-4 '>
          <li>
            <button class='uppercase'>Home</button>
          </li>
          <li>
            <button class='uppercase'>About us</button>
          </li>
          <li>
            <button class='uppercase'>Create your plan</button>
          </li>
        </ul>
      </div>

      <div
        className='navbar default'
        class='sm:hidden flex justify-between align-baseline'
      >
        <div className='logo'>
          <h1 class='text-lg font-bold'>coffeeroasters</h1>
        </div>
        <div className='hamburger-menu' class='self-center relative'>
          <button onClick={toggleHamburger}>
            <img src={hamburgerMenu} alt='hamburger-menu' />
          </button>
          <ul
            className='drop-down-menu'
            class={`${dropdownState} flex-col gap-4 items-end absolute right-0 w-44 px-4 py-8 rounded-md bg-slate-800/95 text-white drop-shadow-xl`}
          >
            <MenuItemLink content='Home' />
            <MenuItemLink content='About us' />
            <MenuItemLink content='Create your plan' />
          </ul>
        </div>
      </div>
    </header>
  );
}
