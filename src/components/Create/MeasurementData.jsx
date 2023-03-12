import React from "react";

export default function MeasurementData({
  dispaly,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  setM1,
  setM2,
  setM3,
  setM4,
  setM5,
  setM6,
  setM7,
  setM8,
  setM9,
  setM10,
}) {
  return (
    <div className={`${dispaly ? "block" : "hidden"}`}>
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
            value={m1}
            onChange={(e) => setM1(e.target.value)}
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
            value={m2}
            onChange={(e) => setM2(e.target.value)}
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
            value={m3}
            onChange={(e) => setM3(e.target.value)}
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
            value={m4}
            onChange={(e) => setM4(e.target.value)}
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
            value={m5}
            onChange={(e) => setM5(e.target.value)}
          />
        </div>

        <div className="w-full px-3 md:mb-0 my-1 ">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            destiny
          </label>
          <input
            className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="text"
            value={m6}
            onChange={(e) => setM6(e.target.value)}
          />
        </div>
        <div className="w-full px-3 md:mb-0 my-1 ">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            bla bla
          </label>
          <input
            className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="number"
            value={m7}
            onChange={(e) => setM7(e.target.value)}
          />
        </div>

        <div className="w-full px-3 md:mb-0 my-1 ">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            leg
          </label>
          <input
            className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="text"
            value={m8}
            onChange={(e) => setM8(e.target.value)}
          />
        </div>
        <div className="w-full px-3 md:mb-0 my-1 ">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            destiny
          </label>
          <input
            className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="text"
            value={m9}
            onChange={(e) => setM9(e.target.value)}
          />
        </div>
        <div className="w-full px-3 md:mb-0 my-1 ">
          <label
            className="block tracking-wide text-gray-700 text-1xl font-semibold mb-1"
            for="grid-first-name"
          >
            hand lenght
          </label>
          <input
            className="appearance-none rounded-md block w-full text-gray-700 border py-2 px-4 leading-tight focus:outline-none focus:bg-white md:py-3"
            id="grid-first-name"
            type="number"
            value={m10}
            onChange={(e) => setM10(e.target.value)}
          />
        </div>

        
      </div>

      <div className="my-4">
        <hr className="border-1 border-[#212529]"></hr>
      </div>
    </div>
  );
}
