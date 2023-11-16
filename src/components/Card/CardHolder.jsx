

import React, { Fragment, useEffect, useState } from 'react'

import { Card } from './Card'
import { CardTitle } from './CardTitle'
import axios from 'axios';


const CardHolder = () => {
    const[cardList,setCardList] = useState([]);

    const getCard = async () => {
        console.log('fetching......');
        const result = await axios.get(
            "https://acadapi.etacorealtime.ir/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query="
        );
    console.log(result.data);
    setCardList(result.data.news);
    };
    useEffect(() =>{
        getCard();
    }, []);

    console.log(cardList)
    
    return (
        <Fragment>
                <CardTitle />
                <Card cardList={cardList}/>
            
        </Fragment>
    )
}

export {CardHolder}