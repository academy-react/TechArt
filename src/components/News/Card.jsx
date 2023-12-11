
    import React, { Fragment } from 'react'
    import imgCard from "../../assets/image/new.png"
    
    import moment from 'moment-jalaali'
    
    const Card = ({newCard}) => {

    // const receiveData = '2023-1127T12:00:00';
    const gregorianData = '20231128';
    const formattedDate = moment (gregorianData, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');

        return (
        <Fragment>
        <div className="bg-white lg:px-40">
            <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8"> اخبار و مقالات  </h2>
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 gap-y-20 ">

                {newCard && newCard.map((category,index) => (

                <div key={index} className="group block">
                <div 
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                <img
                    src={imgCard}
                    alt= "img"
                    className="w-5/6 h-full object-cover object-center"
                />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 text-right">{category.title}</h3>
                <p className="mt-2 text-sm text-gray-600 text-right">{category.miniDescribe}</p>
                {/* <h3 className=" text-sm text-gray-500">{category.keyword}</h3> */}
                {/* <p className='text-xs text-gray-400 text-right'>{gregorianData}</p> */}
                <p className='text-xs text-gray-400 text-right' >{formattedDate}</p>
                </div>
                ))}
            </div>
            </div>
        </div> 
        </Fragment>
        )
    }
    



    export {Card}