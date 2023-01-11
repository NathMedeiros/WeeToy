import { ButtonCartStyled } from "./styled";
import Modal from "react-modal"
import imageCart from "./../../assets/cart.png";
import { useState } from "react";
import { ModalCartStyled } from "../../styles/modalCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartProduct } from "../CartProduct";
import { Button } from "../Button";
import { AuthContext } from "../../context/AuthContext";
import { RegisterContext } from "../../context/RegisterContext"

Modal.setAppElement("#root")

export function ButtonCart (){

    const {openLogin} = useContext(RegisterContext)

    const {isLogged, toysPurshased, loadingPurchase } = useContext(AuthContext)

    const {listCart, count, total, setListCart} = useContext(CartContext)

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    function toBuy(){
        if(isLogged === true){
            toysPurshased(listCart)
            setListCart([{
                category: "",
                description: "",
                id: 0,
                img: "",
                marks: "",
                price: 0,
                toy_name: "",
                userId: 0
            }])
            closeModal()
        }else{
            closeModal()
            openLogin()
        }
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
                            <Button styleButton="style4" onClick={()=>{toBuy()}} disabled={loadingPurchase}>
                                {loadingPurchase ? "Finalizando compra..." : "Finalizar Compra"}
                            </Button>
                        </div>
                    )}
                </ModalCartStyled>
            </Modal>
        </ButtonCartStyled>
    )
}