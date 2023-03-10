import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../useFetch";
import DetailsProfile from './Customerprofile/DetailsProfile';

export default function BlogDetails() {

    const { id } = useParams()
    const { data: details, Pending, error } = useFetch(`http://localhost:8000/Measurements/${id}`)
  return (
    <div className="py-3 container mx-auto">
        <div className="text-center">
        <h1 className="text-2xl md:text-4xl">Details - {id}</h1>
        </div>
        {Pending && <div> Loading.... </div>}
        {error &&<div>{ error }</div>}
        {details && (
          
        <DetailsProfile details={details} />

        )}
      </div> 

  )
}
