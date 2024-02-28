import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='mx-auto px-3 sm:px-6 lg:px-30 bg-gray-800 fixed w-full mb-5'> 
      <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-center">
        <div className="flex flex-shrink-0 items-center">
          <Link href={"/"}>
            {/* <img 
              className="h-8 w-auto"
              src="@/assets/discover.svg"
              alt="Your Company"
            /> */}
          </Link>
        </div>
        <p className='text-gray-300 text-5xl font-medium p-3'>
          Discover <span className='font-bold text-red-300'>More</span>
        </p>
      </div>
    </nav>
  )
}
