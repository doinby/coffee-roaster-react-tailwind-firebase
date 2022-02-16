import React from 'react';

// Components
import MenuItemLink from './MenuItemLink';
import SocialMediaItem from './SocialMediaItem';

// Assets
import facebookIcon from '../../../src/assets/shared/desktop/icon-facebook.svg';
import instagramIcon from '../../../src/assets/shared/desktop/icon-instagram.svg';
import twitterIcon from '../../../src/assets/shared/desktop/icon-twitter.svg';

export default function Footer() {
  return (
    <footer class='flex flex-col items-center gap-12 my-8 py-12 bg-dark-grey text-white'>
      <div className='logo' class='self-center'>
        <h1>coffeeroasters</h1>
      </div>
      <ul className='menu-list' class='flex flex-col gap-4 items-center '>
        <MenuItemLink content='Home' />
        <MenuItemLink content='About us' />
        <MenuItemLink content='Create your plan' />
      </ul>
      <ul className='social-meedia-list' class='flex gap-6'>
        <SocialMediaItem icon={facebookIcon} content='Facebook' />
        <SocialMediaItem icon={instagramIcon} content='Instagram' />
        <SocialMediaItem icon={twitterIcon} content='Twitter' />
      </ul>
    </footer>
  );
}
