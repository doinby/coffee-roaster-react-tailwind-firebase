import React from 'react';

export default function SocialMediaItem({icon, path, content}) {
  return (
    <a role='link' href={path} target='_blank'>
      <img src={icon} alt={content} />
    </a>
  );
}
