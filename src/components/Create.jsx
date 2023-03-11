import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
export default function Create() {
  const [dispaly, setDisplay] = useState(false);

  const toggleForm = () => {
    setDisplay(true)
  };
  return (
    <div className="py-3 container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">Add New Measurement</h1>
      </div>

      {/* main form */}

      <div className="w-full mt-6">
        <form action="" className="">
          <div className="px-3">
            <h1 className="text-2xl">{dispaly ? 'Measuremnt Details' : 'Client Data'}</h1>
            <span className="text-altlearn my-2 text[10px]">
              Fill all required fields marked (*)
            </span>
          </div>

          <div className="my-4">
            <hr className="border-1 border-[#212529]"></hr>
          </div>
          <div className={`${dispaly ? 'hidden' : 'block'}`}>
          <div className="flex flex-col md:flex-row mx-3">
            <div className="w-full md:w-1/2 px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
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
              />
            </div>
          </div>
          </div>

          {/* Measurement */}
          <div className={`${dispaly ? 'block' : 'hidden'}`}>
       
         

          <div className="grid grid-cols-2 md:grid-cols-3 mx-3">
            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Height
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="number"
                value="0"
              />
            </div>

            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Neck
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                value="0"
              />
            </div>
            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Waist
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="number"
                value="0"
              />
            </div>

            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Corset
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                value="0"
              />
            </div>

            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                shoulder
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="number"
                value="0"
              />
            </div>

            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                burst
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                value="0"
              />
            </div>
            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Hips
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="number"
                value="0"
              />
            </div>

            <div className="w-full px-3 md:mb-0 my-1 ">
              <label
                className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Bom
              </label>
              <input
                className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                value="0"
              />
            </div>
          </div>
           <div className="my-4">
            <hr className="border-1 border-[#212529]"></hr>
          </div>
          </div>
        </form>
        <div className="flex justify-end">

            <button className={`bg-altlearn text-white rounded-lg shadow-lg p-2 px-4 ${dispaly ? 'block' : 'hidden'}`} onClick={() => setDisplay(false)}>
              <FaArrowLeft />
            </button>
            <button
              className="bg-altlearn text-white rounded-lg shadow-lg p-2 px-4 mx-2"
             onClick={toggleForm}
            >
              {dispaly ? (
                <span>Submit</span>
              ) : (
                  <span>Next</span>
              )}
              
            </button>
          </div>
      </div>
    </div>
  );
}
