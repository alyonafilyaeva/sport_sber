import React from 'react'
import './Button.scss'

interface ButtonProps {
  label: string
  color: string
}

function Button(props: ButtonProps) {
  return (
    <div className={`btn btn__${props.color}`}>
      {props.label}
      </div>
  )
}

export default Button