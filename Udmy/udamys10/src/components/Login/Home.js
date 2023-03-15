import React from 'react'
import Styled from './Home.module.css'
import Card from '../UI/Card'

const Home = (props) => {
    return (
        <Card className={Styled.home}>
            <h1>Welcome Back !!!</h1>
        </Card>
    )
}

export default Home