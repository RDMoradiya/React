import React from 'react'
import Styled from './ErrorModal.module.css'
import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {
    return (
        <>
            <div className={Styled.backdrop}></div>
            <Card className={Styled.modal}>
                <header className={Styled.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={Styled.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={Styled.actions}>
                    <Button onClick={props.onClick}> Okay </Button>
                </footer>
            </Card>
        </>

    )
}
export default ErrorModal