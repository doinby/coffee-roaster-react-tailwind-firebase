import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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
        <nav className='menu-list' class='flex gap-4 '>
          <Link to='/' class='uppercase'>
            Home
          </Link>
          <Link to='/About' class='uppercase'>
            About us
          </Link>
          <Link to='/createYourPlan' class='uppercase'>
            Create your plan
          </Link>
        </nav>
      </div>

      <div
        className='navbar default'
        class='sm:hidden flex justify-between align-baseline'
      >
        <div className='logo'>
          <h1 class='text-lg font-bold'>coffeeroasters</h1>
        </div>
        <div className='dropdown-menu-container' class='self-center relative'>
          <button className='hamburger-btn' onClick={toggleHamburger}>
            <img src={hamburgerMenu} alt='hamburger-menu' />
          </button>
          <nav
            className='dropdown-menu'
            class={`${dropdownState} flex-col gap-4 items-end absolute right-0 w-44 px-4 py-8 rounded-md bg-slate-800/95 text-white drop-shadow-xl`}
          >
            <MenuItemLink linkTo='/' content='Home' />
            <MenuItemLink linkTo='/about' content='About us' />
            <MenuItemLink linkTo='/createYourPlan' content='Create your plan' />
          </nav>
        </div>
      </div>
    </header>
  );
}
