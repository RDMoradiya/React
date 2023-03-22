import React, { useState } from 'react'

function Button() {

    const [islogin, setIsLogin] = useState(false)
    const [isimage, setIsImage] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    const buttonHandler = () => {
        setIsLogin(!islogin)
    }

    const themeHandler = () => {
        setIsDarkMode(!isDarkMode)
        const theme = document.getElementById("theme")
        theme.style.backgroundColor = isDarkMode ? 'white' : 'black';
        theme.style.color = isDarkMode ? 'black' : 'white';
        theme.style.boxShadow = isDarkMode ? 'none' : '10px 10px 5px grey';
        theme.style.border = isDarkMode ? null : '2px solid green';
    }


    return (
        <>
            {/* button */}

            <div className='card mb-5 w-50 m-auto'>
                <div className='card-header'>
                    <h2>Login/Logout Button</h2>
                </div>
                <div className='card-body'>
                    <button onClick={buttonHandler} className={`btn ${islogin ? 'btn-primary' : 'btn-danger'}`}>{islogin ? 'login' : 'Logout'}</button>
                </div>
            </div>

            {/* image and Dark mode */}

            <div className='card mb-5 w-50 m-auto ' id='theme'>
                <div className='card-header d-flex justify-content-between'>
                    <h2>Hide/Show Button</h2>

                    <button className={`btn ${isDarkMode ? 'btn-secondary' : 'btn-dark'}`} onClick={themeHandler}>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>

                </div>
                <div className='card-body'>
                    <button className='btn btn-primary m-1' onClick={() => setIsImage(true)}>Show Image</button>

                    <button className='btn btn-danger m-1' onClick={() => setIsImage(false)}>Hide Image</button>

                    <button className={`btn ${isimage ? 'btn-success' : 'btn-primary'}`} onClick={() => setIsImage(!isimage)}>{isimage ? 'Hide Image' : 'Show Image'}</button>

                    <br />

                    {isimage ? <img src='https://img.freepik.com/free-vector/cute-panda-with-bamboo-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-vector_138676-4386.jpg?w=2000' alt='panda' className='w-50 mt-2' /> : null
                    }

                </div>
            </div>
        </>
    )
}

export default Button