import React from 'react'

export default function Footer (props) {
    return (
        <footer className='columns navbar is-boxed is-transparent is-fixed-bottom'>
            <nav className='column'>
                <div className='columns navbar-item is-centered'>
                    <a 
                    className='columns navoptions' 
                    href='#donate' 
                    onClick={() => props.handlePageChange('Donate')}
                    key='Donate'
                    >
                    Donate
                    </a>
                </div>
            </nav>
        </footer>
    )
}