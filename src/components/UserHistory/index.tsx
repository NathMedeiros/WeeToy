import React, { useEffect, useState } from "react";
import { StyledHistoric, UlHistoric } from "./style";
import WeeToy from "../../assets/image.png";
import { CardMyProduct } from "../CardMyProduct";
import { api } from "../../request/api";
import { iCardHistoryBuy } from "../../interfaces";
import { CardHistoricBuy } from "../CardHistoricBuy";

const Historic = () => {
  const [historicList, setHistoricList] = useState([] as iCardHistoryBuy[]);
  const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
  const token = localStorage.getItem("@TOKEN: WeeToys");

  useEffect(() => {
    async function getMyProducts() {
      try {
        console.log(user.id, token);
        const request = await api.get(`/users/${user.id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(request.data.purchases_historic);
        setHistoricList(request.data.purchases_historic);
      } catch (error) {
        console.log(error);
      }
    }
    getMyProducts();
  }, []);

  return (
    <StyledHistoric>
      <UlHistoric>
        {historicList.length > 0 ? (
          historicList.map((element) => (
            <CardHistoricBuy
              name={element.name}
              price={element.price}
              image={element.image}
            />
          ))
        ) : (
          <h2>Você ainda não comprou produtos</h2>
        )}
      </UlHistoric>
    </StyledHistoric>
  );
};
export default Historic;
