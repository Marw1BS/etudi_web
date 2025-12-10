import React from 'react'

export function PhoneMockup({ 
  src, 
  alt = 'App screenshot',
  className = '',
  size = 'md', // sm, md, lg
  ...props 
}) {
  const sizes = {
    sm: 'w-70',
    md: 'w-70',
    lg: 'w-70',
  }

  return (
    <div className={`relative ${sizes[size]} ${className}`} {...props}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" />
        
        {/* Screen - adapts to image size */}
        <div className="relative bg-white rounded-[1.5rem] overflow-hidden">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto block"
          />
        </div>

        {/* Side buttons - positioned relative to container */}
        <div className="absolute left-[-2px] top-[15%] w-[3px] h-5 bg-gray-700 rounded-l-sm" />
        <div className="absolute left-[-2px] top-[22%] w-[3px] h-8 bg-gray-700 rounded-l-sm" />
        <div className="absolute left-[-2px] top-[32%] w-[3px] h-8 bg-gray-700 rounded-l-sm" />
        <div className="absolute right-[-2px] top-[22%] w-[3px] h-10 bg-gray-700 rounded-r-sm" />
      </div>
    </div>
  )
}

export default PhoneMockup

