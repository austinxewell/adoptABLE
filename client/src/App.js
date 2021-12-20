import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Adopt from './components/Adopt'
import Footer from './components/Footer';

function App() {

  
  const [currentPage, handlePageChange] = useState('About');

  function renderPage(currentPage) {
    switch(currentPage) {
      default:
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
      // case '':
      //   return(
      //     < />
      //   );
    }
  }

  return (
    <div>
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;