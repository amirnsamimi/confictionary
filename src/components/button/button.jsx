import React from 'react'
import "./button.style.scss"
const Button = (props) => {
  return (
    <button className='btn'>{props.btnlabel}</button>
    )
}

export default Button