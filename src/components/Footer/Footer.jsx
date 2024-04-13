import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-zinc-200 w-full flex justify-center flex-col space-y-4 items-center min-h-[10rem]">


      <div className='text-zinc-900 text-opacity-60 hover:text-opacity-100 space-x-12 flex text-lg'>
        <p>About</p>
        <p>Cart</p>
        <p>Jobs</p>
        <p>Products</p>
      </div>

      <div className='flex items-center text-zinc-600 text-opacity-60 text-2xl w-1/2 gap-12 justify-center p-2'>
        <Link target="_blank" to="https://github.com/manthan-web"><FaGithub /></Link>
        <Link target="_blank" to="https://github.com/manthan-web"><FaFacebook /></Link>
        <Link target="_blank" to="https://twitter.com/Dev_Manthan"><FaXTwitter /></Link>
        <Link target="_blank" to="https://www.linkedin.com/in/manthan-narang-8350812a7/"><FaLinkedinIn /></Link>
      </div>

      <div>
       <p className='text-zinc-600 text-opacity-60 text-sm'>© 2024 Manthan Narang, Inc. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer