
import React from 'react'
    
const Search = () => {
        return (
        <div>
            <div className="mt-1 w-4/5 lg:w-2/5 m-auto ">
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-full text-gray-700 px-4 shadow-2xl border-solid border-2 sm:text-sm"
                placeholder="search "
            />
            </div>
        </div>
        )
    }

    
    export {Search}