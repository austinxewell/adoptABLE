import React, { useState } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Adopt from './components/Adopt'
import Footer from './components/Footer';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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
      case 'Contact':
        return(
          <Contact />
        );
      case 'Adopt':
        return(
          <Adopt />
        );
    }
  }

  return (
    <div>
      <header className='columns'>
        <Header className='column is-half' />
        <Nav className='column is-6 is-offset-6' currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;