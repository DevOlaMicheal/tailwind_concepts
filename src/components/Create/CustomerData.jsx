import React from "react";
import { useState } from "react";
export default function CustomerData({
  dispaly,
  firstname,
  lastname,
  style,
  date,
  setFirstname,
  setLastname,
  setStyle,
  setDate,
}) {
  return (
    <div className={`${dispaly ? "hidden" : "block"}`}>
      <div className="flex flex-col md:flex-row mx-3">
        <div className="w-full md:w-1/2 px-3 md:mb-0 my-1 ">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3 hover:border-altlearn"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0 my-1 ">
          <label
            className="block  tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none rounded-md block w-full border-rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="text"
            placeholder="eg, Butters"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-3">
        <div className="px-3 md:w-1/2 my-1 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            Style
          </label>
          <input
            className="appearance-none rounded-md block w-full border-rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="text"
            placeholder="eg. Ankara, courset top"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          />
        </div>
        <div className="px-3 md:w-1/2 my-1 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            Measurement date
          </label>
          <input
            className="appearance-none rounded-md block w-full border-rounded py-2 px-4 mb-1 bg-white leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="date"
            placeholder="Jane"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
