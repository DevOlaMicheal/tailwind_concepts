import React from "react";
import pimage from "../assets/pro.png";
import { FaBattleNet, FaArrowRight, FaCheck, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Test from "./Test";

export default function MeasureList({ M, title }) {
  return (
    <div>
      <h2 className="text-center pt-2">{title}</h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-3">
        {M.map((measure) => (
          <div
            className="bg-white border border-altlearn text-center p-3 flex flex-col justify-center rounded-lg hover:scale-90 transition ease-in-out duration-500"
            key={measure.id}
          >
            <div className="flex flex-col p-2">
              <p>Name: {measure.firstname} {measure.lastname}</p>
              <p>Date: {measure.date} </p>
              <p>gender: {measure.gender}</p>
            </div>

            <h2 className="font-semibold text-2xl py-1 border-b-2 border-whitee text-center">
              {measure.style}
            </h2>

            <div className="flex flex-row justify-center py-2">
              <Link to={`details/${measure.id}`}>
                <button className="btn flex border items-center border-altlearn font-semibold rounded p-[8px] hover:bg-altlearn hover:text-white hover:scale-100 transition ease-out duration-500" >
                  <span className="mr-[5px] ">view details</span>
                  
                </button>
               
              </Link>
{/* 
              <button className="flex items-center border-[1px] text-center border-red-500 font-semibold rounded py-[8px] bg-red-500 text-white px-4">
                <FaTrash />
              </button> */}
            </div>
          </div>
        ))}

            
          

      </div>
    </div>
  );
}
