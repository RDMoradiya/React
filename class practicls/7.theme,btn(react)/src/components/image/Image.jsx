import React, { useState } from 'react'
import Movies from './Movies'

const MoviesData = [
    {
        MovieName: 'Dangal',
        MovieImage: 'https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg',
        MovieDetails: "Nitesh Tiwari",
    },
    {
        MovieName: 'Baahubali 2: The Conclusion',
        MovieImage: 'https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg',
        MovieDetails: "S. S. Rajamouli",
    },
    {
        MovieName: 'RRR',
        MovieImage: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
        MovieDetails: "S. S. Rajamouli",
    },
    {
        MovieName: 'K.G.F: Chapter 2',
        MovieImage: 'https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg',
        MovieDetails: "Prashanth Neel",
    },
    {
        MovieName: 'Pathaan',
        MovieImage: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg',
        MovieDetails: "Siddharth Anand",

    },
    {
        MovieName: 'Bajrangi Bhaijaan',
        MovieImage: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg',
        MovieDetails: "Kabir Khan",
    }
]

function Image(props) {

    const [enteredMovieData, setEnteredMovieData] = useState(MoviesData)

    const hideHandler = () => {
        setEnteredMovieData([])
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10'>
                    <h1>Top Movies : {enteredMovieData.length}</h1>
                </div>
                <div className='col-2'>
                    <button className='btn btn-dark mb-2' onClick={hideHandler}>Hide</button>
                </div>
            </div>

            <div className='row'>
                {enteredMovieData.map((item, index) => {
                    return (
                        <Movies key={item.index} MovieName={item.MovieName} MovieImage={item.MovieImage} MovieDetails={item.MovieDetails} />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Image