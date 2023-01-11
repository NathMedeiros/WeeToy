import React, { useEffect, useState } from "react";
import { StyledHistoric, UlHistoric } from "./style";
import WeeToy from "../../assets/image.png";
import { CardMyProduct } from "../CardMyProduct";
import { api } from "../../request/api";
import { iCardHistoryBuy } from "../../interfaces";
import { CardHistoricBuy } from "../CardHistoricBuy";

interface iHistoric {
  historicList: {
    category: string;
    description: string;
    id: number;
    img: string;
    marks: string;
    price: number;
    toy_name: string;
    userId: number;
  }[];
}

const Historic = ({ historicList }: iHistoric) => {
  return (
    <StyledHistoric>
      <UlHistoric>
        <h2>Histórico de compras</h2>
        {historicList.length > 0 ? (
          historicList.map((element) => (
            <CardHistoricBuy
              key={element.id}
              toy_name={element.toy_name}
              price={element.price}
              img={element.img}
              id={element.id}
            />
          ))
        ) : (
          <h3>Você ainda não comprou produtos</h3>
        )}
      </UlHistoric>
    </StyledHistoric>
  );
};
export default Historic;
