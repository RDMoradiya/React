import React from 'react'
import Styled from './Button.module.css'

const Button = (props) => {
    return (
        <button type={props.type || 'button'}
            className={`${Styled.button} ${props.className}`}
            disabled={props.disabled}
        >{props.children}
        </button>
    )
}
export default Button