import React from 'react'
import Styled from './Button.module.css'

const Button = (props) => {
    return (
        <button type={props.type} className={Styled.button} onClick={props.onClick}>{props.children}</button>
    )
}
export default Button