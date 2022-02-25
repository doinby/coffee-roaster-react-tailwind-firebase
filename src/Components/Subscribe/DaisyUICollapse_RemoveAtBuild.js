import React from 'react';

export default function DaisyUICollapse_RemoveAtBuild() {
  return (
    <div
      tabindex='0'
      class='collapse border border-base-300 bg-base-100 rounded-box collapse-arrow'
    >
      <div class='collapse-title text-xl font-medium'>
        Focus me to see content
      </div>
      <div class='collapse-content'>
        {/* <p>tabindex="0" attribute is necessary to make the div focusable</p> */}
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log('clicked');
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
