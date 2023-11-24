
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FiSearch } from "react-icons/fi";

import { Card } from './Card'
import { baseUrl } from '../../config/url';
import { Search } from '../Search/Search';


const CardHolder = () => {
    const[newCard,setNewCard] = useState([]);
    const[Records,setRecords] = useState('');



        const handelSearch = (e) =>{
        e.target.value && setRecords(e.target.value)
        !e.target.value && setRecords('')
    };

    const change = (page) =>{
        setNewCard(page);
    }

    const getCardNews = async () => {
        console.log('fetching......');
        const result = await axios.get(
            `${baseUrl}/News?PageNumber=1&RowsOfPage=10&Query=${Records}`
    
        );
    console.log(result.data.news);
    setNewCard(result.data.news);
    };
    useEffect(() =>{
        getCardNews();

    }, [Records]);
    
    
    console.log(newCard);
    console.log(Records)



    return (
        <div className="CardHolder">
                <div className='w-5/6 mx-auto'>

                <div className="mt-1 w-4/5 lg:w-2/5 m-auto relative ">
                <input
                onChange={handelSearch}
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full text-gray-700 px-4  rounded-md shadow-2xl border-solid border-2  leading-10"
                    placeholder="دنباله چی میگردی "
                
                />
                <FiSearch className='absolute top-1/2 -translate-y-1/2 left-2 text-neutral-500' />
                </div>
                </div>
                <Card newCard={newCard}/>
            
        </div>
    )
}

export {CardHolder}