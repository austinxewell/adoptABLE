import React, { useState } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Adopt from './components/Adopt'
import Footer from './components/Footer';

function App() {

  
  const [currentPage, handlePageChange] = useState('Home');

  function renderPage(currentPage) {
    switch(currentPage) {
      default:
        return(
          <Home />
        );
      case 'About':
        return(
          <About />
        );
      case 'Portfolio':
        return(
          <Contact />
        );
      case 'Contact':
        return(
          <Adopt />
        );
    }
  }

  return (
    <div>
      <header>
        <Header />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;