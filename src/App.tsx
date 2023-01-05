import { useContext } from "react";
import Modal from "react-modal";
import { Login, Register } from "./components/Modal";
import { ModalContext } from "./context/ModalContext";
import { Global } from "./styles/global";

import { ResetCss } from "./styles/resetCss";


function App() {
  
  return (
    <>
      <Global />
      <ResetCss/>
      <Global/>
    </>
  );
}

export default App;
