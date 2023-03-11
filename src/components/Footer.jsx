import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
    <div className="container mx-auto flex  flex-col text-center justify-between md:flex-row">
      <div className="text-sm">© 2023 All rights reserved.</div>
      <div className="text-sm">
        Made with 
        <span role="img" aria-label="heart">
          ❤️
        </span>
         by DevOlamicheal
      </div>
      <div className=" flex text-sm my-1 justify-center">
        <div className='mx-[0.5rem]'><FaTwitter /></div>
        <div className='mx-1'> <FaInstagram /></div>
        <div className='mx-1'> <FaGithub /></div>

       
       
      </div>

    </div>
  </footer>
  )
}
