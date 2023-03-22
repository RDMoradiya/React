import React from 'react'

const ImageStyle = {
    width: "100%",
    height: "200px",
    textAlign: "center"
}

const Card = {
    height: "100%",
    width: "250px"
}

const Main = (props) => {

    return (
        <div className='card col-2 mb-1 p-2' style={Card}>
            <div className='card-header'><b>{props.MovieName}</b></div>
            <div className='card-body' >
                <img src={props.MovieImage} alt={props.MovieName} style={ImageStyle} className='m-auto' />
            </div>
            <div className='card-footer'>
                <p style={{ fontSize: "12px" }}><b>Direct By :</b> {props.MovieDetails}</p>
                <a href={props.link} className='btn btn-primary' target='_new' style={{ fontSize: '12px' }} >Information</a>
                <button className='btn btn-warning ms-1 p-2' style={{ fontSize: '12px' }} onClick={() => props.onClick(props.MovieName)}>WatchList</button>
            </div>
        </div>
    )
}

export default Main