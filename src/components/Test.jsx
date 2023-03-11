import React from 'react'
import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <div>
        <div
            className="bg-white border border-altlearn text-center p-3 flex flex-col justify-center rounded-lg hover:scale-90 transition ease-in-out duration-500"
           
          >
            <div className="flex flex-col p-2">
              <p>Name: ogbeta Oluwaseun</p>
              <p>Date: Fri, jan 12th 2023</p>
              <p>gender: Female</p>
            </div>

            <h2 className="font-semibold text-2xl py-1 border-b-2 border-whitee text-center">
              Abaya
            </h2>

            <div className="flex flex-row justify-center py-2">
              <Link to={`details/1`}>
                <button className="btn flex border items-center border-altlearn font-semibold rounded p-[8px] hover:bg-altlearn hover:text-white hover:scale-100 transition ease-out duration-500" >
                  <span className="">view details</span>
                  
                </button>
               
              </Link>
{/* 
              <button className="flex items-center border-[1px] text-center border-red-500 font-semibold rounded py-[8px] bg-red-500 text-white px-4">
                <FaTrash />
              </button> */}
            </div>
            </div>
            
    </div>
  )
}
