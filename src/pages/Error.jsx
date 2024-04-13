import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div  className='min-h-screen w-full flex gap-5 flex-col items-center px-12 py-12'>
        <p className='text-6xl font-semibold'>404</p>
        <p className='text-6xl font-semibold'>Not Found</p>
        <Link className='w-full flex items-center justify-center' to="/"><button className="bg-purple text-white px-12 py-5 text-xl rounded-lg">Home</button></Link>
    </div>
  )
}

export default Error