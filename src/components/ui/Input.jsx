import React from 'react'

export function Input({ 
  className = '', 
  ...props 
}) {
  return (
    <input
      className={`
        w-full px-4 py-3 rounded-input border border-gray-200
        focus:outline-none focus:border-2 focus:border-primary-dark
        placeholder:text-text-secondary/50 text-text-main
        transition-all
        ${className}
      `}
      {...props}
    />
  )
}

export default Input

