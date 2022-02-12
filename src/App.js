import React from 'react';

import {Routes, Route} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';

// Components
import Header from './Components/Home/Header/Header';
import Footer from './Components/Home/Footer/Footer';

export default function App() {
  const baseCss = 'container mx-auto';
  const smUpCss = 'sm:px-4 sm:py-6';

  return (
    <div class={`${baseCss} flex flex-col gap-4 px-4 py-8 ${smUpCss}`}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
