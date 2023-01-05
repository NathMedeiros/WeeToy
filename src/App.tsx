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
<<<<<<< HEAD
=======
      <ResetCss/>
      <Global/>
>>>>>>> 368be234b97cb58fa33642ecc1b58e8d19348a0d
    </>
  );
}

export default App;
