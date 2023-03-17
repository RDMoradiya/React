import React from 'react'

const ImageStyle = {
    width: "100%",
    height: "100%",
}

const Movies = (props) => {
    return (
        <div className='card col-3 mb-1' >
            <div className='card-header'><b>{props.MovieName}</b></div>
            <div className='card-body' >
                <img src={props.MovieImage} alt={props.MovieName} style={ImageStyle} />
            </div>
            <div className='card-footer'> <b>Direct By :</b> {props.MovieDetails}
                <button className='btn btn-primary mt-2'>Information</button>
            </div>
        </div>
    )
}

export default Movies