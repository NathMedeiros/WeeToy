import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { iCardProductProps } from "../../interfaces";
import { Button } from "./../Button";
import { CardProductStyled } from "./styled";


export function CardProduct({name, price, img, id}: iCardProductProps){

    const {addProductToCart} = useContext(CartContext)

    return (
        <CardProductStyled>
            <img src={img} alt="Imagem brinquedo"/>
            <div className="infoToy">
                <h3>{name}</h3>
                <p>{`R$ ${price.toFixed(2)}`}</p>
                <Button styleButton="style2" onClick={()=>{addProductToCart(id)}}>Comprar</Button>
            </div>
        </CardProductStyled>
    )
}