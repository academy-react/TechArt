

    import axios from 'axios';
    import React, { Fragment, useEffect, useState } from 'react'

    import { FiSearch } from "react-icons/fi";
    import {baseUrl} from '../../config/url';


const Search = ({filter}) => {

    
            return (
            <Fragment>

                <div className="mt-1 w-4/5 lg:w-2/5 m-auto relative ">
                <input
                onChange={filter}
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full text-gray-700 px-4  rounded-md shadow-2xl border-solid border-2  leading-10"
                    placeholder="دنباله چی میگردی "
                
                />
                <FiSearch className='absolute top-1/2 -translate-y-1/2 left-2 text-neutral-500' />
                </div>
            </Fragment>
            )
        }

        
        export {Search}