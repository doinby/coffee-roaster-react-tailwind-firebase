// import logo from './logo.svg';

import React from 'react';

// Components
import Header from './Components/Header';
import MainContainer from './Components/Home/MainContainer';
import Main from './Components/Home/MainContainer';

export default function App() {
  const baseCss = 'container mx-auto';
  const smUpCss = 'sm:px-4 sm:py-6';

  return (
    <div class={`${baseCss} px-2 py-4 ${smUpCss}`}>
      <Header />
      <MainContainer />
    </div>
  );
}
