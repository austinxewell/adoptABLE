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
  uri: '/graphql',
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

  return (
    <ApolloProvider client={client}>
      <div className='container background-container'>
        <Router>
          <div className="container pb-5">
            <Nav />
          </div>
          <br />
          <br />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/adopt" component={Adopt} />
              <Route exact path="/messenger/" component={Messenger} />
              <Route exact path="/messenger/:id" component={Messenger} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/adoptABLE" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/donate" component={Donate} />

              <Route component={Home} />
            </Switch>
          </div>
          <br />
          <br />
          <br />
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;