
import React from 'react'

import images from '../../../assets/image/cardmini2.png';
import icon from '../../../assets/image/flash.png';



const CardMain = ({title}) => {
    return (

        <div className='w-[48%] h-[90px] border-solid border-2 flex flex-reverse shadow-md'>
            <div className='w-[120px] h-[59px] items-center flex pt-[26px] pr-[10px]'> 
            <img  src={images} alt="image" /> 
            </div>
            <h2 className='w-[300px] h-[90px] items-center flex  text-black text-xs text-right'> {title} </h2>
            <div className='w-[31px] h-[22px]  my-16 ' > <img src={icon} alt="image" /> </div>
        </div>
    )
}

export {CardMain}