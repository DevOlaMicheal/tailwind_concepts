import React, { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./MeasurementList";
import MeasureList from "./MeasurementList";
import useFetch from "../useFetch";

export default function Home() {

  const { data: Measurements, Pending, error } = useFetch('http://localhost:8000/Measurements')

  return (
    <div className="container mx-auto py-3 top-0">
      <h1 className="text-2xl text-center">Home Page</h1>
      {error && (
      < div
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
