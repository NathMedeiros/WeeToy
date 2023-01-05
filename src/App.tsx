import { useContext } from "react";
import Modal from "react-modal";
import { Login, Register } from "./components/Modal";
import { ModalContext } from "./context/ModalContext";
import { Global } from "./styles/global";
import { modalPosition } from "./components/Modal/modal";

Modal.setAppElement("#root");

function App() {
  const { isOpen, closeModal, openModal } = useContext(ModalContext);
  return (
    <>
      <Global />
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalPosition}>
        <Register />
      </Modal>
      <button onClick={openModal}>Login</button>
    </>
  );
}

export default App;
