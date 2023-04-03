import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const FormHandler = (event) => {
        event.preventDefault()
        props.formData(username, email, password)
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card">
                <a href='/' className="login">Log in</a>
                <form onSubmit={FormHandler}>

                    <div className="inputBox">
                        <input type="text" required="required" value={username} onChange={(event) => { setUserName(event.target.value) }} autoComplete='username' />
                        <span className="user">Username</span>
                    </div>

                    <div className="inputBox">
                        <input type="email" required="required" value={email} onChange={(event) => { setEmail(event.target.value) }} autoComplete='email' />
                        <span className="user">Email ID</span>
                    </div>

                    <div className="inputBox">

                        <input type='password' required="required" value={password} onChange={(event) => { setPassword(event.target.value) }} autoComplete='password' />
                        <span className="user">Password</span>
                    </div>

                    <div className="text-center">
                        <input type='submit' className="enter" value='Enter' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form