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
            name: "mirabel michael",
            date: "1/2/2023",
            gender: "male"
        },
        id: '4'

        
    },


])

const handleDelete = (id) => {
    const U = Measurements.filter(measures => measures.id !== id);

    // setMeasurements(U)
}
  return (
    <div className='container mx-auto py-3'>
        <h1 className='text-2xl text-center'>Home Page</h1>
            <MeasureList M={Measurements} handleDelete={handleDelete} title="All Measures" />
            {/* <MeasureList M={Measurements.filter((m) => m.details.gender === "male")} title="male Measures" /> */}
          

    </div>
  )
}
