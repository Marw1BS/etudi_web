import React from 'react'

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
}

export function Avatar({ 
  src, 
  alt = 'Avatar',
  size = 'md', 
  className = '', 
  ...props 
}) {
  return (
    <div
      className={`
        rounded-full overflow-hidden bg-gray-200
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-avatar-gradient" />
      )}
    </div>
  )
}

export default Avatar

