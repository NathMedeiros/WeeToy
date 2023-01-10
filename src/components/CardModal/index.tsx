import React from "react";
import { useContext } from "react";
import Modal from "react-modal";
import { CardModalContext } from "../../context/CardModalContext";
import imgToy from "../../assets/image.png";
import "../CardModal/style.css";
import { Button } from "../Button";
import { DivBuy, DivHeader } from "./style";

Modal.setAppElement("#root");

export function CardModal() {
  const { cardOpen, closeCard } = useContext(CardModalContext);

  return (
    <div>
      <Modal
        isOpen={cardOpen}
        onRequestClose={closeCard}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content-card"
      >
        <ul>
          <li>
            <DivHeader>
              <img src={imgToy} alt="" />
              <h3>Brinquedo WeeToy</h3>
            </DivHeader>
            <DivBuy>
              <div>
                <p>Marca: ****</p>
                <p>Descrição: ****************</p>
                <p>R$50,00</p>
              </div>
              <Button styleButton="style2">Comprar</Button>
            </DivBuy>
          </li>
        </ul>
      </Modal>
    </div>
  );
}
