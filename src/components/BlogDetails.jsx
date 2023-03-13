import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from "../useFetch";
import DetailsProfile from './Customerprofile/DetailsProfile';
import loader from '../assets/ripple.svg'

export default function BlogDetails() {

    const { id } = useParams()
    const { data: details, Pending, error } = useFetch(`http://localhost:8000/Measurements/${id}`)
    const history = useHistory()
    const handleDelete = () => {
      fetch('http://localhost:8000/Measurements/' + id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/')
      })
    }
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
        {error && (
        <div
          className="bg-red-100 border
           border-red-400 text-red-700 
          px-4 py-4 text-center 
          rounded relative my-[100px] m-2"
          role="alert"
        >
          <strong className="font-bold">Error Fetching Data</strong> <br />
          <span className="block sm:inline">{error}.</span>
        </div>
    
      )}
        {details && (
          
        <DetailsProfile details={details} handleDelete={handleDelete} />

        )}
      </div> 

  )
}
