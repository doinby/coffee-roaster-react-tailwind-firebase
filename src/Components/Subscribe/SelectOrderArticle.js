import React from 'react';

export default function SelectOrderArticle({title, btnData, onClick}) {
  return (
    <article
      tabindex='0'
      class='collapse collapse-arrow w-full'
      onClick={(e) => e.target.classList.add('collapse-open')}
    >
      <h1
        class='collapse-title m-0 text-2xl font-serif'
        onClick={(e) => e.target.parentNode.classList.add('collapse-open')}
      >
        {title}
      </h1>
      <div class='collapse-content flex flex-col gap-4 p-0'>
        {btnData.map((btn, index) => {
          const btnTitle = btn[0];
          const btnContent = btn[1];
          return (
            <button
              key={btnTitle}
              id={index}
              class='px-6 py-8 space-y-2 rounded-lg bg-grey/10 text-left'
              onClick={onClick}
            >
              <h2 class='m-0 font-serif'>{btnTitle}</h2>
              <p class='m-0'>{btnContent}</p>
            </button>
          );
        })}
      </div>
    </article>
  );
}
