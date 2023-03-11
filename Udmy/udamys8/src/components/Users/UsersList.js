import React from 'react'
import Card from '../UI/Card'
import Styled from './UsersList.module.css'


const UsersList = (props) => {
    return (
        <Card className={Styled.users}>
            <ul>
                {props.users.map(user => {
                    return (
                        <li key={user.id}>{user.name} ( {user.age} year's old !!! )
                        </li>
                    )
                })}
            </ul>
        </Card >

    )
}
export default UsersList