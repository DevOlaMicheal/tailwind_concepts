import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import "./MeasurementList"
import MeasureList from './MeasurementList'

export default function Home() {
    
const [Measurements, setMeasurements] = useState([
    {
        title: "Ankara",
        details: {
            name: "John Doe",
            date: "1/2/2023",
            gender: "male"
        },
        id: '0'

    },
    {
        title: "Senator",
        details: {
            name: "mirabel michael",
            date: "1/2/2023",
            gender: "female"
        },
        id: '1'

        
    },
    {
        title: "Corporate",
        details: {
            name: "Oluwaseun Gladys",
            date: "1/2/2023",
            gender: "female"
        },
        id: '3'
        
    },
    {
        title: "shirt and trouser",
        details: {
            name: "Samson Omale",
            date: "1/2/2023",
            gender: "male"
        },
        id: '4'

        
    },


])

const handleDelete = (id) => {
    const New = Measurements.filter(measures => measures.id !== id);

    setMeasurements(New)
}
  return (
    <div className='container mx-auto py-3'>
        <h1 className='text-2xl text-center'>Home Page</h1>
            <MeasureList M={Measurements} title="All Measures" handleDelete={handleDelete}  />
            <MeasureList M={Measurements.filter((m) => m.details.gender === "male")} title="male Measures" handleDelete={handleDelete} />
          

    </div>
  )
}
