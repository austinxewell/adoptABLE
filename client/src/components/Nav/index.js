import React from 'react'
import Auth from '../../utils/auth'
import { BrowserRouter as Router, Link } from 'react-router-dom';


import './nav.css'

export default function Nav(props) {
    const tabsOut = ['adoptABLE', 'About', 'Contact'];
    const tabsIn = ['adoptABLE', 'About', 'Contact', 'Adopt', 'Messenger', 'Profile']
    const registerOut = ['Login', 'SignUp']
    const registerIn = ['Logout']

    function logout(event) {
        console.log('logging out')
        event.preventDefault()
        Auth.logout()
    }

    return (
        <header className='columns navbar is-fixed-top'>
                <nav className='column'>
                    {Auth.loggedIn() ? (
                        <>
                            <div className='columns navbar-item'>
                            {registerIn.map(register => (
                                    <Link  className='column is-2 navoptions'
                                        to={register.toLowerCase()}
                                        onClick={logout}
                                        key={register}>
                                        {register}
                                    </Link>
                            ))}
                            </div>
                        </>
                    ) : (
                    <div className='columns navbar-item'>
                            {registerOut.map(register => (
                                    <Link  className='column is-2 navoptions'
                                        to={register.toLowerCase()}
                                        key={register}>
                                        {register}
                                    </Link>
                           ))}
                    </div>   
                    )}
                </nav>
                <nav className='column'>
                {Auth.loggedIn() ? (
                        <>
                            <div className='columns navbar-item'>
                            {tabsIn.map(tab => (
                                    <Link  className='column  navoptions'
                                        to={tab.toLowerCase()}
                                        key={tab}>
                                        {tab}
                                    </Link>
                            ))}
                            </div>
                        </>
                    ) : (
                    <div className='columns navbar-item'>
                            {tabsOut.map(tab => (
                                    <Link  className='column navoptions'
                                        to={tab.toLowerCase()}
                                        key={tab}>
                                        {tab}
                                    </Link>
                            ))}
                    </div>   
                    )}
                </nav>
        </header>
    );
}
