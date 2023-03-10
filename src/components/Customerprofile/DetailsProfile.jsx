import React from 'react'

export default function DetailsProfile({ details }) {
  return (
    <div className="p-4">
        <div className="flex">
            <div className="border-solid border-black border-2 p-[4rem]">

            </div>
             <div className="p-4">
                <p>Name - {details.name} </p>
                <p>Gender - {details.gender}</p>
                <p>Style - {details.style}</p>
                <p>Date - {details.date}</p>
             </div>
        </div>
    </div>
  )
}
