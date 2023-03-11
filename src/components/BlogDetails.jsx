import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../useFetch";
import DetailsProfile from './Customerprofile/DetailsProfile';
import loader from '../assets/ripple.svg'

export default function BlogDetails() {

    const { id } = useParams()
    const { data: details, Pending, error } = useFetch(`http://localhost:8000/Measurements/${id}`)
  return (
    <div className="py-3 container mx-auto">
        <div className="text-center">
        <h1 className="text-2xl md:text-4xl">Details - {id}</h1>
        </div>
        {Pending && (
          <div className="flex h-screen items-center justify-center">
          <div className="bg-gray-300 p-4">
            <img src={loader} alt="" srcset="" />
          </div>
        </div>
        
        )}
        {error &&<div>{ error }</div>}
        {details && (
          
        <DetailsProfile details={details} />

        )}
      </div> 

  )
}
