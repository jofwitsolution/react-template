import React from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import { Footer, Navbar, NotFound } from './components';
import { About, Home } from './pages';

import './styles/App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Routers>
          <Route path='/about-us' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routers>
      </main>
      <Footer />
    </div>
  );
}

export default App;
