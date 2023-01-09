import React, { useEffect, useState } from "react";
import { ImgEdit, MyAdsStyled, UlAds } from "./style";
import WeeToy from "../../assets/image.png";
import Edit from "../../assets/edit.png";
import Remove from "../../assets/delet.png";
import { api } from "../../request/api";
import { CardMyProduct } from "../CardMyProduct";
import { iCardMyProductProps } from "../../interfaces";

const MyAds = () => {
  const [userAds, setUserAds] = useState([] as iCardMyProductProps[]);

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
        {userAds.length > 0 ? (
          userAds.map((element) => (
            <CardMyProduct
              key={element.id}
              toy_name={element.toy_name}
              id={element.id}
              price={element.price}
              img={element.img}
            />
          ))
        ) : (
          <h2>Você ainda não tem brinquedos anunciados</h2>
        )}
      </UlAds>
    </MyAdsStyled>
  );
};
export default MyAds;
