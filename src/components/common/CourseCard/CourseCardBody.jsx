import React from 'react'

const CardBody = ({name,color,href}) => {
  return (
    <div className="relative mt-3    ">
    <h3 className="text-xl  text-black">
      {name}
    </h3>
    <p className="mt-2  text-sm text-gray-800 font-sans ">مدرس: {color}</p> 
    
   
    <a
      href={href}
      className="relative flex items-center w-[40%] my-4 mx-auto justify-center rounded-md border border-transparent border-stone-600 bg-white py-2  p-3 text-sm font-medium text-amber-600 hover:bg-amber-600 hover:text-white"
    >
      ثبت نام دوره
      <span className="sr-only">, {name}</span>
    </a>
 
  </div>
  )
}

export  {CardBody}
