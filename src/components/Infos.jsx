import React from 'react'

function Infos(props) {
    return (
        <li className='list-group-item border border-primary m-1 rounded-1 p-3'>
            {props.label}
        </li>
    )
}

export default Infos