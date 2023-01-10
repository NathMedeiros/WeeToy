import { useContext } from "react";
import { CardModalContext } from "../../context/CardModalContext";
import { CartContext } from "../../context/CartContext";
import { iCardProductProps } from "../../interfaces";
import { Button } from "./../Button";
import { CardProductStyled } from "./styled";

export function CardProduct({ name, price, img, id }: iCardProductProps) {
  const { addProductToCart } = useContext(CartContext);
  const { openCard } = useContext(CardModalContext);

  return (
    <CardProductStyled>
      <figure onClick={openCard}>
        <img src={img} alt="Imagem brinquedo" />
      </figure>
      <div className="infoToy">
        <h3>{name}</h3>
        <p>{`R$ ${price.toFixed(2)}`}</p>
        <Button
          styleButton="style2"
          onClick={() => {
            addProductToCart(id);
          }}
        >
          Comprar
        </Button>
      </div>
    </CardProductStyled>
  );
}
