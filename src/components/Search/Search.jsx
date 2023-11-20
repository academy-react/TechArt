
    import axios from 'axios';
    import React, { Fragment, useEffect, useState } from 'react'

    import { FiSearch } from "react-icons/fi";
    import {baseUrl} from '../../config/url';




    const Search = () => {

        const[SearchNews,setSearchNews] = useState([]);

        const getSearchNews = async () => {
            console.log('search......');
            const result = await axios.get(
                `${baseUrl}/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=news1`
            );
        console.log(result.data);
        setSearchNews(result.data.value);
        };
        useEffect(() =>{
            getSearchNews();
        }, []);

        console.log(SearchNews);



            return (
            <Fragment>

            {SearchNews && SearchNews.map((title) => (
                <div className="mt-1 w-4/5 lg:w-2/5 m-auto relative "key={title}>
                    <button className=''> click </button>
                <input
                value={SearchNews}
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full text-gray-700 px-4  rounded-md shadow-2xl border-solid border-2  leading-10"
                    placeholder="دنباله چی میگردی "
                
                />
                <FiSearch className='absolute top-1/2 -translate-y-1/2 left-2 text-neutral-500' />
                </div>
                ))};
            </Fragment>
            )
        }

        
        export {Search}