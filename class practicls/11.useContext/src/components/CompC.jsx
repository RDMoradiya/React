import React, { useContext } from 'react'
import { UseContext } from '../App'

function CompC() {

    const myData = useContext(UseContext)
    return (
        <div>
            <h1>Welcome {myData.userName}</h1>
        </div>
    )
}

export default CompC