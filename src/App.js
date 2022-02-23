import React from 'react';

import {Routes, Route} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Subscribe from './Pages/Subscribe';

// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Stylesheet
import '../src/index.scss';

export default function App() {
  const baseCss = 'container mx-auto';
  const smUpCss = 'sm:px-4 sm:py-6';

  return (
    <div class={`${baseCss} flex flex-col gap-4 px-4 py-8 ${smUpCss}`}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-your-plan' element={<Subscribe />} />
      </Routes>
      <Footer />
    </div>
  );
}
