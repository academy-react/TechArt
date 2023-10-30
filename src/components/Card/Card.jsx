

import React from "react"
import image from "../../assets/image/Annotation .png";

const people = [
        {
        name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
        },
        {
        name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',        
        },
        {
        name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
        },
        {
        name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
        },
        {
        name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
        },
        {
        name: 'لورم ایسپوم دارای استاندارد صنعتی متن ساختگی از سال میلادی زمانی که یک پرینتر ناشناخته به زحمت 1500 درحال گسترش بود می باشد ',
        },
        // More people...
    ]
    
    const Card = () => {
        return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 p-5">
            {people.map((person) => (
            <div
                key={person.email}
                className="relative flex  gap-4 rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
                <div className=" ">
                <img className="w-40   "  src={image} alt="" />

                </div>
                <div className="min-w-0 grid grid-cols-1 md:grid-cols-1 ">
                <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className=" text-gray-900 ">{person.name}</p>
                </a>
                </div>
            </div>
            ))}
        </div>
        )
    }
    

    
    
    export {Card}



