import React from 'react'

export default function Nav(props) {
    const tabs = ['Home', 'About', 'Contact', 'Adopt'];

    return (
        <div className='column'>
            <nav className='row column nav-wrapper'>
                        {tabs.map(tab => (
                            <a  className='column'
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}
                            >
                                {tab}
                            </a>
                        ))}
            </nav>
        </div> 
    );
}
