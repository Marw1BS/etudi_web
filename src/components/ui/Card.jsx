import React from 'react'

export function Card({ 
  children, 
  className = '', 
  ...props 
}) {
  return (
    <div
      className={`
        bg-white rounded-card shadow-card
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

