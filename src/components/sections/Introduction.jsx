import React from 'react'
import { Link } from 'react-router-dom'

export const Introduction = () => {
  return (
    <section className='flex items-center justify-between'>
      <div className=''>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800'>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h1>
        <p className='mt-8 text-md md:text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Eos voluptate consectetur non dolorum.
        </p>
      </div>
      <div>
        <Link to="/write" className='hidden md:block relative'>
        <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
            // className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button 
            className="m-auto w-20 h-20 absolute top-0 left-0 right-0 bottom-0  
                     bg-purple-600 rounded-full flex items-center justify-center
                     animate-pulse animatedButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="15 18 6 18 6 9" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  )
}