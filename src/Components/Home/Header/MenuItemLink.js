import React from 'react';

export default function MenuItemLink({content, buttonCss}) {
  return (
    <li>
      <button role='link' class={`${buttonCss} uppercase`}>
        {content}
      </button>
    </li>
  );
}
