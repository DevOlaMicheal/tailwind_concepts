import React from 'react'
import reactLogo from '../assets/react.svg'

export default function Home() {
  return (
    <div className='container mx-auto py-3'>
        <h1 className='text-3xl'>Home Page</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-3'>

            <div className="border-solid border-4 border-blue-300 p-5 flex flex-col">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus vitae fugit quas optio alias sed architecto,</p>
            </div>
            <div className="border-solid border-4 border-blue-300 p-5 flex flex-col">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus vitae fugit quas optio alias sed architecto,</p>
            </div>
            <div className="border-solid border-4 border-blue-300 p-5 flex flex-col">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus vitae fugit quas optio alias sed architecto,</p>
            </div>
            <div className="border-solid border-4 border-blue-300 p-5 flex flex-col">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus vitae fugit quas optio alias sed architecto,</p>
            </div>
            
        </div>
    </div>
  )
}
