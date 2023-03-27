import React from 'react'

const MainApidata = (props) => {

    return (
        <div className="col-3 mb-4" key={props.id} >
            <div className="card">
                <img
                    src={props.image}
                    className="w-100 p-3"
                    style={{ height: "200px", objectFit: "contain", width: '100%' }}
                    alt=""
                />
                <div className="card-body">
                    <h5 title={props.title} className="text-truncate">
                        {props.title}
                    </h5>
                    <p className="text-truncate" title={props.description} style={{ fontSize: "12px" }}>{props.description}</p>
                    <p>Price: <b>{props.price} $</b></p>
                </div>

                <div className='card-footer d-flex justify-content-between' >
                    <h5>{`${props.rating.rate} / 5`}</h5>
                    <button className='btn btn-success' onClick={props.onClick}>Add To List</button>
                </div>
            </div>
        </div>
    )
}

export default MainApidata