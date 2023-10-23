

import React from 'react'

import imag from '../../../../assets/image/Anno.png'

const CardMain2 = ({title,desc}) => {
    return (
        <div className='justify-center border-solid border-2 shadow-md p-5 '>
            <div className='w-full items-center flex pt-2 pr-10'> 
            <img  src={imag} alt="image" /> 
            </div>
            <h3 className=' pr-2 items-center text-black text-right font-sans text-xs sm:text-[12px] mt-[7px]'> {title} </h3>
            <h3 className=' pr-2 items-center text-neutral-600 text-right font-sans tex-xs sm:text-[11px] mt-[7px] '> {desc} </h3>
        
        </div>
    )
}

export {CardMain2}