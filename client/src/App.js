import React, { useState } from 'react';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Adopt from './components/Adopt'
import Footer from './components/Footer';
import Messenger from './components/Messenger';
import Logout from './components/Logout';
import Donate from './components/Donate';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Success from './components/Success';
import { StoreProvider } from './utils/GlobalState';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
        )
    }
  }

  return (
    <ApolloProvider client={client}>

        <header>
          <div className='container'>
            <Router>
              <Nav />
                <div className='container'>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/adobt" component={Adopt} />
                    <Route exact path="/messenger" component={Messenger} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/adoptABLE" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Home} />
                    <Route exact path="/signup" component={SignUp} />

                    <Route component={Home} />
                  </Switch>
                </div>
            
            </Router>
          </div>
          <br />
          <br />
        </header>
        
    </ApolloProvider>  
    )

  // return (
  //   <ApolloProvider client={client}>
  //     <Router>
  //       <div className='container'>
  //         <StoreProvider>
  //         <header className=''>
  //           <Nav className='' currentPage={currentPage} handlePageChange={handlePageChange} />
  //         </header>
  //         <br/>
  //         <main className=''>
  //           <br/>
  //           <div className=''>
  //             <br/>
  //           {renderPage(currentPage)}
  //           </div>
  //         </main>
  //         <br/>
  //         <br/>
  //         <br/>
  //         <Footer />
  //         </StoreProvider>
  //       </div>
  //     </Router>
  //   </ApolloProvider>
  // );
}

export default App;