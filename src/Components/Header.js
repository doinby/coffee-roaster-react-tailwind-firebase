import React from 'react';

import hamburgerMenu from '../../src/assets/shared/mobile/icon-hamburger.svg';

export default function Header() {
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
        <div className='hamburger-menu' class='self-center'>
          <img src={hamburgerMenu} alt='hamburger-menu' />
        </div>
      </div>
    </header>
  );
}
