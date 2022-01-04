import React, { useState } from 'react';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav';
import Donate from './components/Donate'
import About from './components/About';
import Contact from './components/Contact';
import Adopt from './components/Adopt'
import Footer from './components/Footer';
import Messenger from './components/Messenger';
import Logout from './components/Logout'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Success from './components/Success';
import { StoreProvider } from './utils/GlobalState';
import Profile from './components/Profile';


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
          <Login className='' currentPage={currentPage} handlePageChange={handlePageChange}/>
        )
      case 'SignUp':
        return(
          <SignUp className='' currentPage={currentPage} handlePageChange={handlePageChange}/>
        )
      case 'Logout':
        return (    
          <Home />
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
      case 'Messenger':
        return(
          <Messenger />
        );
      case 'Success':
        return(
          <Success />
        );
      case 'Profile':
        return(
          <Profile />
        );
      case 'Donate':
        return(
          <Donate />
        );
    }
  }

  return (
    <ApolloProvider client={client}>
      
        <div className='container'>
          <StoreProvider>
          <header className=''>
            <Nav className='' currentPage={currentPage} handlePageChange={handlePageChange} />
          </header>
          <br/>
          <main className=''>
            <br/>
            <div>
              <br/>
            {renderPage(currentPage)}
            </div>
          </main>
          <br/>
          <br/>
          <br/>
          <Footer className='' currentPage={currentPage} handlePageChange={handlePageChange} />
          </StoreProvider>
        </div>
      
    </ApolloProvider>
  );
}

export default App;