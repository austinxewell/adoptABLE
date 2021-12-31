import React from 'react'
import Auth from '../../utils/auth'
import Cart from '../Cart';

export default function Nav(props) {
    const tabs = ['adoptABLE', 'About', 'Contact', 'Adopt', 'Messenger'];
    const Registrations = ['Login', 'SignUp']

    function logout(event) {
        console.log('logging out')
        event.preventDefault()
        Auth.logout()
    }

    return (
        <header className='columns navbar is-boxed is-transparent is-fixed-top'>
            <nav className='column'>
                {Auth.loggedIn() ? (
                    <>
                        <div className='columns navbar-item'>
                            <a className='column is-2 navoptions' href="/" onClick={logout}>
                            Logout
                            </a>
                        </div>
                    </>
                ) : (
                <div className='columns navbar-item'>
                        {Registrations.map(Registration => (
                            <a  className='column is-2 navoptions'
                                href={'#' + Registration.toLowerCase()}
                                onClick={() => props.handlePageChange(Registration)}
                                key={Registration}>
                                {Registration}
                            </a>
                        ))}
                </div>   
                )}
            </nav>
            <nav className='column'>
                <div className='columns navbar-item'>
                        {tabs.map(tab => (
                            <a  className='column navoptions'
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}>
                                {tab}
                            </a>
                        ))}
                </div>
            </nav>
            <nav>
                <div className="column mr-3 mt-3">
                    <Cart></Cart>
                </div>
            </nav>
        </header>
    );
}
