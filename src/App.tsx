import { useContext } from "react";
import Modal from "react-modal";
import { Login, Register } from "./components/Modal";
import { ModalContext } from "./context/ModalContext";
import { UserPage } from "./pages/UserPage";
import { Global } from "./styles/global";

import { ResetCss } from "./styles/resetCss";
import imageTest from "./assets/test.webp"
import { CardHistoricBuy } from "./components/CardHistoricBuy";

function App() {
  return (
    <>
      <Global />
      <ResetCss />
      <UserPage>
        <></>
      </UserPage>
    </>
  );
}

export default App;
