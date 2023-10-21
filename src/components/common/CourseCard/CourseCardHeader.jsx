import React from 'react'

const CardHeader = ({imageSrc,imageAlt}) => {
  return (
    <div className="relative h-52 w-full overflow-hidden  border bg-slate-200">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-[90%] w-[60%]  object-center  object-contain mx-auto"
                  />
                </div>
  )
}

export  {CardHeader}
