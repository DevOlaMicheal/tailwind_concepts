import React from "react";
import pimage from '../assets/pro.png'
export default function MeasureList({ M, title, handleDelete }) {
  return (
    <div>
      <h2 className="text-center pt-2">
        { title }
      </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-3'>

      {M.map((measure) => (
        <div
          className="bg-white text-center p-3 flex flex-col rounded-lg"
          key={measure.id}
        >
        
            <div className="flex flex-col p-2">
              <p>Name: {measure.details.name}</p>
              <p>Date: {measure.details.date} </p>
              <p>gender: {measure.details.gender}</p>
              <p>status: </p>
            </div>
          
         
          <h2 className="font-semibold text-2xl py-1 border-b-2 border-whitee text-center">{measure.title}</h2>
          
          
          <div className="flex flex-row justify-center py-2">
          <button
              className="border-[1px] text-center border-altlearn px-4 font-semibold rounded py-[8px] hover:bg-altlearn hover:text-white md:px-[6px] mr-1"
            >
              view details
            </button>   
                     <button
              className="border-[1px] text-center border-green-500 px-4 font-semibold rounded py-[8px] hover:bg-green-500 hover:text-white  md:px-[6px]"

              onClick={handleDelete(measure.id)}
            >
              Completed!
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
