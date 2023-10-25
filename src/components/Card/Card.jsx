

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {people.map((person) => (
            <div
                key={person.email}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
                <div className=" ">
                <img className="w-4/6 lg:w-5/6 sm:3/6 "  src={image} alt="" />

                </div>
                <div className="min-w-0 grid grid-cols-1 md:grid-cols-1 ">
                <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className=" text-gray-900 text-xs lg:px-0 lg:text-lg	">{person.name}</p>
                </a>
                </div>
            </div>
            ))}
        </div>
        )
    }
    

    
    
    export {Card}



