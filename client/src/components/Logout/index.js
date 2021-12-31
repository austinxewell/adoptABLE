import react from 'react'

import './logout.css'

import Auth from '../../utils/auth';

export default function logout (event) {
    
    function logout(event) {
        console.log('logging out')
        event.preventDefault()
        Auth.logout()
    }
    return (
        <section>

        {function logout(event) {
            console.log('logging out')
            event.preventDefault()
            Auth.logout()
            
        }}
            <br/>
            <div>
                <p>You are Logged Out!</p>
            </div>
        </section>
    )
}
