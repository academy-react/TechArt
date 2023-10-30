
import React from 'react'
import { FiSearch } from "react-icons/fi";


const Search = () => {
        return (
        <div>
            <div className="mt-1 w-4/5 lg:w-2/5 m-auto relative ">
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full text-gray-700 px-4  rounded-md shadow-2xl border-solid border-2  leading-10"
                placeholder="search "
            
            />
            <FiSearch className='absolute top-1/2 -translate-y-1/2 left-2 text-neutral-500' />
            {/* <img className='absolute' src={FiSearch} alt="image" /> */}
            </div>
        </div>
        )
    }

    
    export {Search}