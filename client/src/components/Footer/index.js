import React from 'react'
import './footer.css'

export default function Footer (props) {
    return (
        <footer className='columns navbar navbarFooter is-fixed-bottom'>
            <nav className='column donatenav'>
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