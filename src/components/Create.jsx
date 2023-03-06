import React from "react";

export default function Create() {
  return (
    <div className="py-3 container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">Add New Measurement</h1>
      </div>

      {/* main form */}

      <div className="w-full mt-6">
        <form action="" className="">
          <div className="px-3">
            <h1 className="text-2xl">Customer Data</h1>
            <span className="text-altlearn my-2 text[10px]">
              
              Fill all required fields marked (*)
            </span>
          </div>

          <div className="my-4">
            <hr className="border-1 border-[#212529]"></hr>
          </div>
          <div className="flex flex-col md:flex-row mx-3">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700 text-1xl font-semibold mb-1"
                for="grid-first-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full border-rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white md:py-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
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
              className="appearance-none block w-full border-rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white md:py-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
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
              className="appearance-none block w-full border-rounded py-2 px-4 mb-1 bg-white leading-tight focus:outline-none focus:bg-white md:py-3"
              id="grid-first-name"
              type="date"
              placeholder="Jane"
            />
          </div>
          </div>
          
        
          <div className="px-3 mt-[30px]">
            <h1 className="text-2xl">Measurements</h1>
           
          </div>
          <div className="my-4">
            <hr className="border-1 border-[#212529]"></hr>
          </div>
          
        </form>
      </div>
    </div>
  );
}
