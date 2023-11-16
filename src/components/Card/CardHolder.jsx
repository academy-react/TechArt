import React, { Fragment, useEffect, useState } from "react";

import { Card } from "./Card";
import { CardTitle } from "./CardTitle";
import axios from "axios";
import { baseUrl } from "../../config";

const CardHolder = () => {
  const [cardList, setCardList] = useState([]);

  const getCard = async () => {
    console.log("fetching......");
    const result = await axios.get(
      `${baseUrl}/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );
    console.log(result.data);
    setCardList(result.data.news);
  };
  useEffect(() => {
    getCard();
  }, []);

  console.log(cardList);

  return (
    <Fragment>
      <div className="">
        <CardTitle />
        <Card cardList={cardList} />
      </div>
    </Fragment>
  );
};

export { CardHolder };
