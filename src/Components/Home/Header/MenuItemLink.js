import React from 'react';
import {Link} from 'react-router-dom';

export default function MenuItemLink({linkTo, content, buttonCss}) {
  return (
    <Link to={linkTo} class={`${buttonCss} uppercase`}>
      {content}
    </Link>
  );
}
