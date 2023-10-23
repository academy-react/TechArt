
import React from 'react'
import { MiniDiv } from './miniDiv'


const TitleArticle = () => {
    return (
        <div className="w-full flex flex-wrap">
        <div className=" w-full h-[50px] text-center text-lg flex flex-col text-black"> اخبار و مقالات  </div>
        <div className=" w-full h-[50px] text-center flex flex-nowrap text-black ">
            <div className="w-1/2 h-[25px] text-right flex text-base mx-0 gap-0.5"> اخبار  
                <MiniDiv />
            </div>
            <div className="w-1/2 h-[25px] text-right ml-2 flex mx-6  sm: "> مقالات 
                <MiniDiv/>
            </div>
        </div>

    </div>
    )
}

export  {TitleArticle}