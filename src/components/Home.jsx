import React, { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./MeasurementList";
import MeasureList from "./MeasurementList";
import useFetch from "../useFetch";

export default function Home() {
  const {
    data: Measurements,
    Pending,
    error,
  } = useFetch("http://localhost:8000/Measurements");

  return (
    <div className="container mx-auto py-3 top-0">
      <div className="m-4">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b-2 border-altlearn py-2 hover:scale-90 transition ease-in duration-300">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-[3px] px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search measurements"
              aria-label="Search"
            />
            
          </div>
        </form>
      </div>
      {error && (
        <div
          className="bg-red-100 border
           border-red-400 text-red-700 
          px-4 py-4 text-center 
          rounded relative my-[100px] m-2"
          role="alert"
        >
          <strong className="font-bold">opps! failed</strong> <br />
          <span className="block sm:inline">{error}.</span>
        </div>
      )}
      {Pending && <div>Loading...</div>}
      {Measurements && <MeasureList M={Measurements} title="All Measures" />}
    </div>
  );
}
