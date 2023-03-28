import React, { useContext } from 'react'
import './Form.css'
import { formwrapper } from '../App'

const Form = () => {

    const { userName, setUserName, email, setEmail, password, setPassword, SubmitHandler, isEdit, editFormHandler } = useContext(formwrapper)

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className='row w-50'>
                <div className="box col-md-10 justify-content-center">
                    <form className="form" onSubmit={SubmitHandler}>
                        <p className="heading">Login</p>
                        <input className="input"
                            placeholder="Username"
                            type="text"
                            autoComplete='Username'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)} />

                        <input className="input"
                            placeholder="email"
                            type="email"
                            autoComplete='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <input className="input"
                            placeholder="password"
                            type="password"
                            autoComplete='password'
                            value={password} onChange={(e) => setPassword(e.target.value)} />

                        {/*  for edit button */}
                        {
                            isEdit ? <button className="btn" onClick={editFormHandler}>Edit</button> : <button className="btn">Submit</button>
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form