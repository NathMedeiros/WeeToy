import React from "react";
import { ImgEdit, MyAdsStyled, UlAds } from "./style";
import WeeToy from "../../assets/image.png";
import Edit from "../../assets/edit.png";
import Remove from "../../assets/delet.png";

const MyAds = () => {
  return (
    <MyAdsStyled>
      <UlAds>
        <h1>Anuncios Ativos</h1>
        <li>
          <img src={WeeToy} alt="Brinquedo" />
          <div>
            <p>Descrição</p>
            <p> R$</p>
          </div>
          <div>
            <ImgEdit src={Edit} alt="Editar" />
            <ImgEdit src={Remove} alt="Remover" />
          </div>
        </li>
        <li>
          <img src={WeeToy} alt="Brinquedo" />
          <div>
            <p>Descrição</p>
            <p>R$</p>
          </div>
          <div>
            <ImgEdit src={Edit} alt="Editar" />
            <ImgEdit src={Remove} alt="Remover" />
          </div>
        </li>
        <li>
          <img src={WeeToy} alt="Brinquedo" />
          <div>
            <p>Descrição</p>
            <p> R$</p>
          </div>
          <div>
            <ImgEdit src={Edit} alt="Editar" />
            <ImgEdit src={Remove} alt="Remover" />
          </div>
        </li>
      </UlAds>
    </MyAdsStyled>
  );
};
export default MyAds;
