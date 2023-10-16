
import React from 'react'
import { MiniDiv } from './miniDiv'


const TitleArticle = () => {
    return (
        <div className="title">
        <div className=" w-[600px] h-[50px] text-center text-lg font-sans  flex flex-col text-black font-bold"> اخبار و مقالات  </div>
        <div className=" w-[600px] h-[50px] text-center  font-sans  flex flex-nowrap text-black ">
            <div className="w-[360px] h-[25px] text-right flex text-base mx-0 gap-0.5"> اخبار  
                <MiniDiv />
            </div>
            <div className="w-[360px] h-[25px] text-right ml-7 flex mx-6 "> مقالات 
                <MiniDiv/>
            </div>
        </div>

    </div>
    )
}

export  {TitleArticle}