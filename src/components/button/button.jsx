import React from 'react'
import "./button.style.scss"
const Button = (props) => {
  return (
    <button className='btn'style={{backgroundColor:props.backgroundColor}}>{props.buttonlabel} </button>
    )
}

export default Button