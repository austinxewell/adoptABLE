import React from 'react'

export default function Header (props) {
    return (
        <header className='login column'>
            <a 
            href='#login' 
            onClick={() => props.handlePageChange('Login')}
            key={'Login'}>
                Login
                </a>
        </header>
    )
}