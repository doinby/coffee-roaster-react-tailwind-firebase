import React from 'react';

import {Link} from 'react-router-dom';

export default function MenuItemLink({content, to}) {
  return (
    <Link to={to}>
      <button role='link' class='text-xs text-white/50 uppercase'>
        {content}
      </button>
    </Link>
  );
}
