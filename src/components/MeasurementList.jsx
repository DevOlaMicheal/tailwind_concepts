import React from "react";
import pimage from '../assets/pro.png'
export default function MeasureList({ M }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-3'>

      {M.map((measure) => (
        <div
          className="bg-white text-center p-3 flex flex-col rounded-lg"
          key={measure.id}
        >
          <div className="flex flex-row p-3">
            <img src={pimage} alt="" className="w-1/3" />
            <div className="p-2">
              <p>Name: John Doe</p>
              <p>Date: 12/2/2004 </p>
              <p>gender: make</p>
            </div>
          </div>
         
          <h2 className="font-semibold text-2xl py-1 border-b-2 border-whitee text-center">{measure.title}</h2>
          
          <p className="py-1">{measure.details}</p>

          <div className="flex flex-col py-2">
            <a
              href="#"
              className="border-[2px] text-center border-altlearn px-4 text-lg font-semibold rounded py-[8px] hover:bg-altlearn hover:text-white"
            >
              show Details!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
