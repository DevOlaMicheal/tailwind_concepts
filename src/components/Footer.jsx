import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-2 sticky bottom-[0px] w-full mt-3">
    <div className="container mx-auto flex text-center justify-between">
      <div className="text-sm">© 2023 All rights reserved.</div>
      
      <div className=" flex text-sm my-1 justify-center">
        <div className='mx-[0.5rem]'><FaTwitter /></div>
        <div className='mx-1'> <FaInstagram /></div>
        <div className='mx-1'> <FaGithub /></div>

       
       
      </div>

    </div>
  </footer>
  )
}
