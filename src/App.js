// import logo from './logo.svg';

import React from 'react';

// Components
import Header from './Components/Header';
import Main from './Components/Main';

export default function App() {
  const baseCss = 'container mx-auto';
  const smUpCss = 'sm:px-4 sm:py-6';

  return (
    <div class={`${baseCss} px-2 py-4 ${smUpCss}`}>
      <Header />
      <Main />
    </div>
  );
}
