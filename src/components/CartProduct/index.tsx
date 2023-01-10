import { iCardProductProps } from "../../interfaces";
import { CartProductStyled } from "./styled";

import trash from "./../../assets/trashCart.png"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function CartProduct({name, price, img, id}: iCardProductProps){

    const {removeProductFromCart} = useContext(CartContext)

    return (
        <CartProductStyled>
            <img src={img} alt="Imagem Brinquedo" className="imageToy"/>
            <div>
                <h3>{name}</h3>
                <p>{`R$ ${price.toFixed(2)}`}</p>
            </div>
            <button onClick={()=>{removeProductFromCart(id)}}>
                <img src={trash} alt="Logo lixeira"/>
            </button>
        </CartProductStyled>
    )
}