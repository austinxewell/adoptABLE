import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer (props) {
    return (
        <footer className='columns navbar navbarFooter is-fixed-bottom'>
            <nav className='column donatenav'>
                <div className='columns navbar-item is-centered'>
                    <Link 
                    className='columns navoptions' 
                    to='donate' 
                    key='Donate'
                    >
                    Donate
                    </Link>
                </div>
            </nav>
        </footer>
    )
}