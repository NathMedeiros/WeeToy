import React, { useContext } from "react";
import { Div } from "./style";
import { ModalDeleteContext } from "./../../context/DeleteContext";

export const Delete = () => {
  const { deleteNow } = useContext(ModalDeleteContext);
  return (
    <Div>
      <p>Deseja realmente deletar?</p>
      <button onClick={deleteNow}>Deletar</button>
    </Div>
  );
};
