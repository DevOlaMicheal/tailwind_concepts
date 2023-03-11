import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [Title, setTitle] = useState("Tailor Pro");

  return (
    <div className="sticky top-0 drop-shadow-lg shadow-red bg-[#212529] text-white">
      <nav className="container mx-auto font-semibold">
        <div className="flex flex-row justify-between p-2">
          <div className="py-2 text-2xl md:text-3xl">Dashboard</div>

          <div className="flex flex-row space-x-3">
            <Link to="/" className="text-lg py-[8px]">
              Home
            </Link>
      <div className="">
      <Link to="/create" className="flex border-[1px] border-none text-center  px-4 font-semiold rounded py-[8px] bg-altlearn text-white">
              <span className="mr-[5px]">Add new</span>

            </Link>
      </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
