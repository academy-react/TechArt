

import React from 'react'

import imag from '../../../../assets/image/Anno.png'

const CardMain2 = ({title,desc}) => {
    return (
        <div className='w-[30%] h-[220px] border-solid border-2  shadow-md'>
            <div className='w-[100%] h-[90px] items-center flex pt-[6px] pr-[40px]'> 
            <img  src={imag} alt="image" /> 
            </div>
            <h3 className=' pr-2 items-center text-black text-right font-sans text-[11px] font-bold mt-[7px]'> {title} </h3>
            <h3 className=' pr-2 items-center text-neutral-600 text-right font-sans text-[10px] mt-[7px] font-bold '> {desc} </h3>
        
        </div>
    )
}

export {CardMain2}