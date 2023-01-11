import React, { useContext } from "react";
import { Div } from "./style";
import { ModalDeleteContext } from "./../../context/DeleteContext";
import { motion } from "framer-motion";

export const Delete = () => {
  const { deleteNow, loadingDelete } = useContext(ModalDeleteContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Div>
        <p>Deseja realmente deletar?</p>
        <button onClick={deleteNow} disabled={loadingDelete}>
          {loadingDelete ? "Deletando..." : "Deletar"}
        </button>
      </Div>
    </motion.div>
  );
};
