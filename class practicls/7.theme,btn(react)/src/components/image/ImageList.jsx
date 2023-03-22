import React, { useState } from 'react'
import Info from './Info'
import Main from './Main'
import { MoviesData } from './MovieData'

const ImageList = (props) => {

    const [enteredMovieData, setEnteredMovieData] = useState(MoviesData)
    const [EnterdData, setenterdData] = useState([])

    const hideHandler = () => {
        setEnteredMovieData([])
        setenterdData([])

    }
    const showHandler = () => {
        setEnteredMovieData(MoviesData)
    }

    const watchListHandler = (movieName) => {
        setenterdData([...EnterdData, movieName])
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10'><h1>Top Movies List :- {enteredMovieData.length}</h1></div>
                <div className='col-2'>
                    <button className='btn btn-primary mb-2' onClick={hideHandler}>Hide</button>
                    <button className='btn btn-success mb-2 ms-2' onClick={showHandler}>Show</button>
                </div>
            </div>
            <br></br>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10'>
                        <div className='row column-gap-2 justify-content-start'>

                            {
                                enteredMovieData.map((item, index) => {
                                    return (
                                        <Main key={index} MovieName={item.MovieName} MovieImage={item.MovieImage} MovieDetails={item.MovieDetails} link={item.link} onClick={watchListHandler} />
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='col-2'>
                        <ul className='list-group'>
                            {EnterdData.map((item, index) => {
                                return (
                                    <Info key={index} label={item} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageList