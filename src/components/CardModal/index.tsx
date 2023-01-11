import React from "react";
import { useContext } from "react";
import Modal from "react-modal";
import { CardModalContext } from "../../context/CardModalContext";
import "../CardModal/style.css";
import { DivBuy, DivHeader } from "./style";
import { AuthContext } from "../../context/AuthContext";

Modal.setAppElement("#root");

export function CardModal() {
  const { cardOpen, setCardOpen } = useContext(CardModalContext);
  const { listToys } = useContext(AuthContext);
  const toyFilter = listToys.filter((elem) => {
    return elem.id === cardOpen;
  });
  console.log(toyFilter);
  return (
    <div>
      <Modal
        isOpen={cardOpen ? true : false}
        onRequestClose={() => setCardOpen(null)}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content-card"
      >
        <ul>
          {toyFilter.map((toy) => {
            return (
              <li key={toy.id}>
                <DivHeader>
                  <div>
                    <img src={toy.img} alt="" />
                    <h3>{toy.toy_name}</h3>
                  </div>
                  <button onClick={() => setCardOpen(null)}>X</button>
                </DivHeader>

                <DivBuy>
                  <p>Marca: {toy.marks}</p>
                  <p>Descrição: {toy.description}</p>
                  <p>Preço: {`R$  ${toy.price.toFixed(2)}`}</p>
                </DivBuy>
              </li>
            );
          })}
        </ul>
      </Modal>
    </div>
  );
}
