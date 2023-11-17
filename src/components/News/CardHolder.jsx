
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Card } from './Card'
import { baseUrl } from '../../config/url';



const CardHolder = () => {
    const[newCard,setNewCard] = useState([]);

    const getCardNews = async () => {
        console.log('fetching......');
        const result = await axios.get(
            `${baseUrl}/News/GetListNewsCategory`
        );
    console.log(result.data);
    setNewCard(result.data);
    };
    useEffect(() =>{
        getCardNews();
    }, []);

    console.log(newCard);


    return (
        <div className="CardHolder">
                <Card newCard={newCard}/>
            
        </div>
    )
}

export {CardHolder}