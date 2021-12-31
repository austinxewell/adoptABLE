import './logout.css'

import Auth from '../../utils/auth';

export default function logout(event) {
    console.log('logging out')
    event.preventDefault()
    Auth.logout()
}