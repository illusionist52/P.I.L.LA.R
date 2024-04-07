import React from 'react'
import { FaRegHandPointDown } from "react-icons/fa6";
function Card({point, index}) {
  return (
    <a href="#" className="group relative block h-48 max-w-xl sm:h-48 space-y-6 lg:h-48">
    <span className="absolute inset-0 border-2 border-dashed space-y-6 border-white"></span>
  
    <div
      className="relative flex h-full transform items-end border-2 border-white bg-gray-700 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
    >
      <div
        className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
      >
        <FaRegHandPointDown color='white' size={40} />
  
        <h2 className="mt-4 text-xl font-medium sm:text-2xl text-white ">{index}</h2>
      </div>
  
      <div
        className="absolute p-4 opacity-0 transition-opacity h-[20vh] overflow-y-auto hide-scrollbar group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
      >

  
        <p className="mt-4 text-2xl sm:text-base text-white">
         {point}
        </p>

      </div>
    </div>
  </a>
  )
}

export default Card