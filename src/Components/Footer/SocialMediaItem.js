import React from 'react';

export default function SocialMediaItem({icon, content}) {
  return (
    <li>
      <button>
        <img src={icon} alt={content} />
      </button>
    </li>
  );
}
