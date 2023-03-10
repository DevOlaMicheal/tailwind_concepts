import React from "react";
import { FaEdit, FaPlus, FaShare, FaShareAlt } from "react-icons/fa";

export default function DetailsProfile({ details }) {
  return (
    <div className="p-4 border-[1px] border-black my-4 w-full">
      <div className="flex">
        <div className="border-solid border-altlearn rounded- bg-white border-2 p-[4rem]">
          <p>Client Image</p>
        </div>
        <div className="p-4">
          <p>Name - {details.name} </p>
          <p>Gender - {details.gender}</p>
          <p>Style - {details.style}</p>
          <p>Date - {details.date}</p>
        </div>
      </div>

      <div className="border-[1px] border-black my-4"></div>

      <div className="w-full justify-center">
      <table class="border-collapse border border-[#1e293b] ... w-full">
  <thead>
    <tr>
      <th class="border border-[#1e293b] ... p-[1rem]">Measurement</th>
      <th class="border border-[#1e293b] ... p-[1rem]">Unit</th>
      <th class="border border-[#1e293b] ... p-[1rem]">action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-[#1e293b] ... p-[1rem]">Shoulder</td>
      <td class="border border-[#1e293b] ... p-[1rem]">{details.measures.shoulder}</td>
      <td class="border border-[#1e293b] ... p-[1rem] text-center"> <button className="border border-altlearn bg-altlearn p-1 text-white rounded-2xl"><FaEdit /></button> </td>
    </tr>
    <tr>
      <td class="border border-[#1e293b] ... p-[1rem]">hips</td>
      <td class="border border-[#1e293b] ... p-[1rem]">{details.measures.hips}</td>
      <td class="border border-[#1e293b] ... p-[1rem] text-center"> <button className="border border-altlearn bg-altlearn p-1 text-white rounded-2xl"><FaEdit /></button> </td>
    </tr>
    <tr>
      <td class="border border-[#1e293b] ... p-[1rem]">Length</td>
      <td class="border border-[#1e293b] ... p-[1rem]">{details.measures.length}</td>
      <td class="border border-[#1e293b] ... p-[1rem] text-center"> <button className="border border-altlearn bg-altlearn p-1 text-white rounded-2xl"><FaEdit /></button> </td>
    </tr>
  </tbody>
</table>
<div className="text-center flex space-x-1 my-4">
<button className="border border-altlearn bg-altlearn p-1 text-white rounded-2xl"> <FaPlus /> </button> 
<button className="border border-altlearn bg-altlearn p-1 text-white rounded-2xl"> <FaShareAlt /></button> 
</div>
      </div>
    </div>
  );
}
