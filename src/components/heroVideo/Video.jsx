import React, { useState, useEffect } from 'react'
import { CiMusicNote1 } from "react-icons/ci";



export const Video = () => {

   


  return (
    <div className='relative w-full md:h-[30rem] h-[20rem]'>
        <div className='w-full h-full absolute bg-black flex justify-center items-center bg-opacity-50'>
        </div>
        <button className='absolute bottom-2 right-2 bg-white p-3 flex items-center justify-center rounded-full text-purple shadow-md'><CiMusicNote1/></button>
        <video src="../mainVideo/nostaligia.mp4" className='object-cover w-full h-full' autoPlay loop muted/>
    </div>
  )
}
