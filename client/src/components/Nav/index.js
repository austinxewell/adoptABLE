import React from 'react'
import Auth from '../../utils/auth'
import Cart from '../Cart';

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
                            <a  className='column is-2 navoptions'
                                href={'#' + register.toLowerCase()}
                                onClick={logout}
                                key={register}>
                                {register}
                            </a>
                        ))}
                        </div>
                    </>
                ) : (
                <div className='columns navbar-item'>
                        {registerOut.map(register => (
                            <a  className='column is-2 navoptions'
                                href={'#' + register.toLowerCase()}
                                onClick={() => props.handlePageChange(register)}
                                key={register}>
                                {register}
                            </a>
                        ))}
                </div>   
                )}
            </nav>
            <nav className='column'>
            {Auth.loggedIn() ? (
                    <>
                        <div className='columns navbar-item'>
                        {tabsIn.map(tab => (
                            <a  className='column  navoptions'
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}>
                                {tab}
                            </a>
                        ))}
                        </div>
                    </>
                ) : (
                <div className='columns navbar-item'>
                        {tabsOut.map(tab => (
                            <a  className='column navoptions'
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}>
                                {tab}
                            </a>
                        ))}
                </div>   
                )}
            </nav>
        </header>
    );
}
