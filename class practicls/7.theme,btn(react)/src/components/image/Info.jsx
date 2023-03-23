import React from 'react'

function Info(props) {
    return (
        <li className='list-group-item border border-primary m-1 rounded-1'>
            {props.label}
        </li>
    )
}

export default Info