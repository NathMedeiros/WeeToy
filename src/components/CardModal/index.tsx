import React from "react";
import { useContext } from "react";
import Modal from "react-modal";
import { CardModalContext } from "../../context/CardModalContext";
import "../CardModal/style.css";
import { DivBuy, DivHeader } from "./style";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

export function CardModal() {
  const { cardOpen, setCardOpen } = useContext(CardModalContext);
  const { listToys } = useContext(AuthContext);
  const toyFilter = listToys.filter((elem) => {
    return elem.id === cardOpen;
  });
  
  return (
    <div>
      <Modal
        isOpen={cardOpen ? true : false}
        onRequestClose={() => setCardOpen(null)}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content-card"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
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
                    <p>
                      Preço:{`R$ ${toy.price.toFixed(2).replace(".", ",")}`}
                    </p>
                  </DivBuy>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </Modal>
    </div>
  );
}
