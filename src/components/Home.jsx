import React, { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./MeasurementList";
import MeasureList from "./MeasurementList";

export default function Home() {
  const [Measurements, setMeasurements] = useState(null);
  const [Pending, setPending] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    fetch('http://localhost:8000/Measurementss')
      .then(res => {
        if(!res.ok) {
          throw Error("Could not fetch data, try again")
        }
        return res.json()
      }).then(data => {
        setMeasurements(data);
        setPending(false)
      }).catch(err => {
        setPending(false)
        setError(err.message)
  
      })
  }, []);

  return (
  
    <div className="container mx-auto py-3 top-0">
      <h1 className="text-2xl text-center">Home Page</h1>
      {error &&
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4 text-center rounded relative my-[100px] m-2" role="alert">
      <strong className="font-bold">opps! failed</strong> <br />
      <span className="block sm:inline">{error}.</span>
    
    </div>
       }
      {Pending && <div>Loading...</div>}
      {Measurements &&  <MeasureList
        M={Measurements}
        title="All Measures"
       
      />

      }
      
    </div>
  );
}
