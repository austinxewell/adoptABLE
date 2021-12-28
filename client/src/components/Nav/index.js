import React from 'react'

export default function Nav(props) {
    const tabs = ['adoptABLE', 'About', 'Contact', 'Adopt'];
    const Registrations = ['Login', 'SignUp']

    return (
        <header className='columns navbar is-boxed is-dark is-transparent is-fixed-top'>
            <nav className='column'>
                <div className='columns navbar-item'>
                        {Registrations.map(Registration => (
                            <a  className='column is-2'
                                href={'#' + Registration.toLowerCase()}
                                onClick={() => props.handlePageChange(Registration)}
                                key={Registration}>
                                {Registration}
                            </a>
                        ))}
                </div>
            </nav>
            <nav className='column'>
                <div className='columns navbar-item'>
                        {tabs.map(tab => (
                            <a  className='column'
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}>
                                {tab}
                            </a>
                        ))}
                </div>
            </nav>
        </header>
    );
}
