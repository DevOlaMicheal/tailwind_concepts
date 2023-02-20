import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'

export default function Home() {
    
const [courses, setCourses] = useState([
    {
        title: "technical writing",
        details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus ",
        id: '0'

    },
    {
        title: "creative writing",
        details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus ",
        id: '1'

        
    },
    {
        title: "software dev",
        details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus ",
        id: '3'
        
    },
    {
        title: "technical writing",
        details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, temporibus eos velit minima minus ",
        id: '4'

        
    },


])
  return (
    <div className='container mx-auto py-3'>
        <h1 className='text-3xl'>Home Page</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-3'>
            {courses.map((course) => (
                <div className="border-solid border-[2px] border-blue-300 p-5 flex flex-col rounded-lg" key={course
                .id}>
                <h2 className='font-semibold text-2xl py-2'>{course.title}</h2>
                <p>{course.details}</p>

             

                <div className='flex flex-col py-2'>
             
                    <a href="#" className='border-[2px] text-center border-altlearn px-4 text-lg font-semibold rounded py-[4px] hover:bg-altlearn hover:text-white'>start course!</a>

                </div>

            </div>
            ))}
            

            
            
        </div>
    </div>
  )
}
