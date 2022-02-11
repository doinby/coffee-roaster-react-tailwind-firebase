// import logo from './logo.svg';

import React from 'react';

// Components
import Header from './Components/Header';
import MainContainer from './Components/Home/MainContainer';

export default function App() {
  const baseCss = 'container mx-auto';
  const smUpCss = 'sm:px-4 sm:py-6';

  return (
    <div class={`${baseCss} flex flex-col gap-4 px-4 py-8 ${smUpCss}`}>
      <Header />
      <MainContainer />
    </div>
  );
}
