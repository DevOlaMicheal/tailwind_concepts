import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import MeasurementData from "./Create/MeasurementData";
import CustomerData from "./Create/CustomerData";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

export default function Create() {
  const [dispaly, setDisplay] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("");
  const [style, setStyle] = useState("");
  const [pending, setPending] = useState(false)

  const [m1, setM1] = useState("0.00");
  const [m2, setM2] = useState("0.00");
  const [m3, setM3] = useState("0.00");
  const [m4, setM4] = useState("0.00");
  const [m5, setM5] = useState("0.00");
  const [m6, setM6] = useState("0.00");
  const [m7, setM7] = useState("0.00");
  const [m8, setM8] = useState("0.00");
  const [m9, setM9] = useState("0.00");
  const [m10, setM10] = useState("0.00");
  const history = useHistory();


  const toggleForm = (e) => {
    setDisplay(true);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true)
    const newmeasures = { firstname, lastname, date, style, measures:{m1,m2,m3,m4,m5,m6,m7,m8,m9,m10} };

    console.log(newmeasures);

    fetch('http://localhost:8000/Measurements', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newmeasures)
    }).then(() => {
      Swal.fire('Saved!', '', 'success')
      setPending(false)
      // history.go(-1)
      history.push('/')
    }).catch((err) => {
      Swal.fire({icon:'error',title:'Failed',  text:'Cant connect to server'})
      history.push('/')

    })
  };
  return (
    <div className="py-3 container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">Add New Measurement</h1>
      </div>
      <div className="w-full mt-6">
        <form onSubmit={handleSubmit} className="">
          <div className="px-3 text-center md:text-start">
            <h1 className="text-2xl">
              {dispaly ? "Measuremnt Details" : "Client Data"}
            </h1>
            <span className="text-altlearn my-2 text[10px]">
              Fill all required fields marked (*)
            </span>
          </div>

          <div className="my-4">
            <hr className="border-1 border-[#212529]"></hr>
          </div>

          {/* customer data */}
          <CustomerData
            dispaly={dispaly}
            firstname={firstname}
            lastname={lastname}
            style={style}
            date={date}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setStyle={setStyle}
            setDate={setDate}
          />

          {/* main form */}
          <MeasurementData
            dispaly={dispaly}
            m1={m1}
            m2={m2}
            m3={m3}
            m4={m4}
            m5={m5}
            m6={m6}
            m7={m7}
            m8={m8}
            m9={m9}
            m10={m10}
            setM1={setM1}
            setM2={setM2}
            setM3={setM3}
            setM4={setM4}
            setM5={setM5}
            setM6={setM6}
            setM7={setM7}
            setM8={setM8}
            setM9={setM9}
            setM10={setM10}
          />

          <div className="flex justify-end">
            <div
              className={`bg-altlearn text-white cursor-pointer rounded-lg shadow-lg p-2 px-4 ${
                dispaly ? "block" : "hidden"
              }`}
              onClick={(e) => setDisplay(false)}
            >
              <FaArrowLeft />
            </div>

            {dispaly ? (
              <button className="bg-altlearn text-white rounded-lg shadow-lg p-2 px-4 mx-2">
                {!pending && <span>Submit</span>}
                {pending && <span>Sending data...</span>}

              </button>
            ) : (
              <div
                className="bg-altlearn text-white cursor-pointer rounded-lg shadow-lg p-2 px-4 mx-2"
                onClick={(e) => setDisplay(true)}
              >
                <span>Next</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
