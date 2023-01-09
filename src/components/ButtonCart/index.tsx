import { ButtonCartStyled } from "./styled";
import Modal from "react-modal"
import imageCart from "./../../assets/cart.png";
import { useState } from "react";
import { ModalCartStyled } from "../../styles/modalCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartProduct } from "../CartProduct";
import { Button } from "../Button";

Modal.setAppElement("#root")

export function ButtonCart (){

    const {listCart, count, total} = useContext(CartContext)

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    return (
        <ButtonCartStyled>
            <button onClick={openModal}>
                <img src={imageCart} alt="Logo do carrinho" className="cart" />
                <p>{count}</p>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modalCart"
                overlayClassName="modal-overlay"
            >
                <ModalCartStyled>
                    <div className="cartTitle">
                        <h2>Carrinho de compras</h2>
                    </div>
                    {listCart[0].id === 0 ? (
                        <div className="emptyCart">
                            <p>Carrinho vazio</p>
                            <span>Adicione brinquedos para comprar</span>
                        </div>
                    ):(
                        <div className="cartOn">
                            <ul>
                                {listCart.map((toy)=>{
                                    return (
                                        <CartProduct key={toy.id} name={toy.toy_name} price={toy.price} img={toy.img} id={toy.id}/>
                                    )
                                })}
                            </ul>
                            <div className="totalCart">
                                <p>{`Quantidade: ${count}`}</p>
                                <p>{`R$ ${total.toFixed(2)}`}</p>
                            </div>
                            <Button styleButton="style4">Finalizar Compra</Button>
                        </div>
                    )}
                </ModalCartStyled>
            </Modal>
        </ButtonCartStyled>
    )
}