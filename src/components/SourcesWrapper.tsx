import React, { ReactNode } from 'react'

interface SourceWrapperProps {
    children: ReactNode
}

export default function SourcesWrapper({children}: SourceWrapperProps) {
  return (
    <div className='flex gap-4'>
      {children}
    </div>
  )
}
