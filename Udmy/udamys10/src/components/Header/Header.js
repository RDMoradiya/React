import React from 'react'
import './Header.css'
import Navigation from './Navigation'


function Header(props) {
    return (
        <header className='container-fluid header p-3'>
            <h1>A Typical Login Page</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    )
}

export default Header