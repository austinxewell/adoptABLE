import React from 'react'

export default function Nav(props) {
    const tabs = ['Home', 'About', 'Contact', 'Adopt'];

    return (
        <div>
            <nav className='row nav-wrapper'>
                        {tabs.map(tab => (
                            <a   
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
