

import React from "react"

import image from "../../assets/image/Annotation .png";


// const people = [
//         {
//         name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
//         },
//         {
//         name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',        
//         },
//         {
//         name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
//         },
//         {
//         name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
//         },
//         {
//         name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
//         },
//         {
//         name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
//         },
//     ]
    
    const Card = ({cardList}) => {
        return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 p-5">
            {cardList.map((person) => (
            <div
                key={person}
                className="relative flex flex-row  gap-4 rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
                <div className=" ">
                <img className="w-20 h-full object-cover  mx-auto  "  src={person.currentImageAddressTumb} alt="" />

                </div>
                <div className="min-w-0 grid grid-cols-1 md:grid-cols-1 ">
                <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className=" text-gray-900 ">{person.addUserFullName}</p>
                    <p>{person.updateDate}</p>
                    <p>{person.insertDate}</p>
                </a>
                </div>
            </div>
            ))}
        </div>
        )
    }
    
    export {Card}



