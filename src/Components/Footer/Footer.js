import React from 'react';

// Components
import MenuItemLink from './MenuItemLink';
import SocialMediaItem from './SocialMediaItem';

// Assets
import logoImg from '../../../src/assets/shared/desktop/logo.svg';
import facebookIcon from '../../../src/assets/shared/desktop/icon-facebook.svg';
import instagramIcon from '../../../src/assets/shared/desktop/icon-instagram.svg';
import twitterIcon from '../../../src/assets/shared/desktop/icon-twitter.svg';

export default function Footer() {
  return (
    <footer class='flex flex-col items-center gap-12 my-8 py-12 bg-dark-grey text-white'>
      <img id='logo-footer' src={logoImg} alt="Coffeeroasters' Logo" />
      <nav className='menu-list' class='flex flex-col gap-4 items-center '>
        <MenuItemLink content='Home' to='/' />
        <MenuItemLink content='About us' to='/about' />
        <MenuItemLink content='Create your plan' to='/create-your-plan' />
      </nav>
      <nav id='social-media-list' class='flex gap-6'>
        <SocialMediaItem
          icon={facebookIcon}
          path='https://facebook.com'
          content='Facebook'
        />
        <SocialMediaItem
          icon={instagramIcon}
          path='https://instagram.com'
          content='Instagram'
        />
        <SocialMediaItem
          icon={twitterIcon}
          path='https://twitter.com'
          content='Twitter'
        />
      </nav>
    </footer>
  );
}
