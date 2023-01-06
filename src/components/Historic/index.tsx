import React from "react";
import { StyledHistoric, UlHistoric } from "./style";
import WeeToy from "../../assets/image.png";

const Historic = () => {
  return (
    <StyledHistoric>
      <UlHistoric>
        <h1>Compras Realizadas</h1>
        <li>
          <img src={WeeToy} alt="Brinquedo" />
          <div>
            <p>Descrição</p>
            <p>R$</p>
          </div>
        </li>
        <li>
          <img src={WeeToy} alt="Brinquedo" />
          <div>
            <p>Descrição</p>
            <p>R$</p>
          </div>
        </li>
        <li>
          <img src={WeeToy} alt="Brinquedo" />
          <div>
            <p>Descrição</p>
            <p>R$</p>
          </div>
        </li>
      </UlHistoric>
    </StyledHistoric>
  );
};
export default Historic;
