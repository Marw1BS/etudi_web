import React from 'react'

const variants = {
  default: 'bg-gray-100 text-gray-600',
  tricolor: 'bg-badge-gradient text-white',
  success: 'bg-green-50 text-green-600',
  primary: 'bg-primary/10 text-primary',
}

export function Badge({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-chip text-sm font-medium
        ${variants[variant] || variants.default}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge

