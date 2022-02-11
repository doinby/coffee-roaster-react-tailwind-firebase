import React from 'react';

export default function MenuItemLink({content}) {
  return (
    <li>
      <button role='link' class='text-xs text-white/50 uppercase'>
        {content}
      </button>
    </li>
  );
}
