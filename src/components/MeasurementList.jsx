import React from "react";
import pimage from "../assets/pro.png";
import { FaBattleNet, FaArrowRight, FaCheck, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MeasureList({ M, title }) {
  return (
    <div>
      <h2 className="text-center pt-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-3">
        {M.map((measure) => (
          <div
            className="bg-white text-center p-3 flex flex-col rounded-lg"
            key={measure.id}
          >
            <div className="flex flex-col p-2">
              <p>Name: {measure.name}</p>
              <p>Date: {measure.date} </p>
              <p>gender: {measure.gender}</p>
            </div>

            <h2 className="font-semibold text-2xl py-1 border-b-2 border-whitee text-center">
              {measure.style}
            </h2>

            <div className="flex flex-row justify-center py-2">
              <Link to={`details/${measure.id}`}>
                <button className="flex border-[1px] items-center text-center border-altlearn px-4 font-semibold rounded py-[8px] hover:bg-altlearn hover:text-white md:px-[6px] mr-1">
                  <span className="mr-[5px] ">view details</span>{" "}
                  <FaArrowRight />
                </button>
              </Link>

              <button className="flex items-center border-[1px] text-center border-red-500 font-semibold rounded py-[8px] bg-red-500 text-white px-4">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
