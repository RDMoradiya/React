import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Home from './components/Login/Home'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    return (
      setIsLoggedIn(true)
    )
  }

  const logoutHandler = () => {
    return (
      setIsLoggedIn(false)
    )
  }

  return (
    <>
      <Header isAuthenticated={isLoggedIn} onClick={logoutHandler} />
      <main>
        {isLoggedIn ? null : <Login onLogin={loginHandler} />}
        {!isLoggedIn ? null : <Home onLogout={logoutHandler} />}
      </main>
    </>
  )
}

export default App;
