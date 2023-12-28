import React from 'react'

const Button = ({className,children,id,type,...props}) => {
  return (
    <button id={id} onClick={props.onClick} className={className} type={type}>{children}</button>
  )
}

export default Button;