import { useEffect, useState } from "react";
import { MyAdsStyled, UlAds } from "./style";
import { api } from "../../request/api";
import { CardMyProduct } from "../CardMyProduct";
import { iEditProductModal } from "../../interfaces";

export function MyAds() {
  const [userAds, setUserAds] = useState([] as iEditProductModal[]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
    const token = localStorage.getItem("@TOKEN: WeeToys");

    async function getUserAds() {
      try {
        const request = await api.get(`/users/${user.id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setUserAds(request.data.toy);
        console.log(request.data.toy);
      } catch (error) {
        console.log(error);
      }
    }

    getUserAds();
  }, []);
  return (
    <MyAdsStyled>
      <UlAds>
        <h2>Anúncios Ativos</h2>
        {userAds.length > 0 ? (
          userAds.map((element) => (
            <CardMyProduct
              key={element.id}
              category={element.category}
              marks={element.marks}
              description={element.description}
              toy_name={element.toy_name}
              id={element.id}
              price={element.price}
              img={element.img}
            />
          ))
        ) : (
          <h3>Você ainda não tem brinquedos anunciados</h3>
        )}
      </UlAds>
    </MyAdsStyled>
  );
}
