import React, { useState } from 'react';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Adopt from './components/Adopt'
import Footer from './components/Footer';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
      case 'Login':
        return(
          <Login />
        )
      case 'SignUp':
        return(
          <SignUp />
        )
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
    <ApolloProvider client={client}>
      <div className="purplecolor2">
        <header className='container'>
          <Nav className='' currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <br/>
        <main className='container'>
          <div className='column'>
          {renderPage(currentPage)}
          </div>
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;