import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import "./MeasurementList"
import MeasureList from './MeasurementList'

export default function Home() {
    
const [Measurements, setMeasurements] = useState([
    {
        title: "Ankara",
        details: " ",
        id: '0'

    },
    {
        title: "Senator",
        details: "",
        id: '1'

        
    },
    {
        title: "Corporate",
        details: "",
        id: '3'
        
    },
    {
        title: "shirt and trouser",
        details: "",
        id: '4'

        
    },


])
  return (
    <div className='container mx-auto py-3'>
        <h1 className='text-2xl text-center'>Home Page</h1>
            <MeasureList M={Measurements}/>
    </div>
  )
}
