import React from 'react'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-button',
  secondary: 'bg-secondary text-white hover:bg-secondary-light',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  return (
    <button
      className={`
        font-semibold rounded-button transition-all duration-200
        active:scale-95 inline-flex items-center justify-center
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

