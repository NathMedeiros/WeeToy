import { HeaderStyled } from "./styled";
import { useContext, useState } from "react";
import Modal from "react-modal";
import logo from "./../../assets/logoWeeToy.png";

import menu from "./../../assets/menu.png";
import { ModalContext } from "../../context/AuthContext";
import { Login } from "../Modal/auth";
import { modalPosition } from "../Modal/modal";
import { ModalAnnounceContext } from "../../context/ModalAnnounceContext";
import { Announce } from "../ModalAnunciar copy";
import { ButtonCart } from "../ButtonCart";

export function Header() {
  const { openLogin, closeLogin, loginOpen } = useContext(ModalContext);
  const { openModal, closeModal, isOpen } = useContext(ModalAnnounceContext);

  const [linksMobile, setLinksMobile] = useState(false);

  function changeStatusLinksMobile() {
    if (linksMobile === false) {
      setLinksMobile(true);
    } else {
      setLinksMobile(false);
    }
  }

  return (
    <HeaderStyled>
      <div className="divHeader">
        <img src={logo} alt="Logo WeeToy" />
        <div className="divLinksCart">
          <div className="linksHeader">
            <span>Categoria</span>
            <span>Doações</span>
            <span onClick={openModal}>Anunciar</span>
            <span onClick={openLogin}>Login</span>
          </div>
          <ButtonCart />
          <button
            className="buttonMenu"
            onClick={() => {
              changeStatusLinksMobile();
            }}
          >
            <img src={menu} alt="Logo menu" className="menu" />
          </button>
        </div>
        <Modal
          isOpen={loginOpen}
          onRequestClose={closeLogin}
          style={modalPosition}
        >
          <Login />
        </Modal>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={modalPosition}
        >
          <Announce />
        </Modal>
      </div>
      {linksMobile === true ? (
        <div className="linksHeaderMobile">
          <span>Categoria</span>
          <span>Doações</span>
          <span>Anunciar</span>
          <span>Login</span>
        </div>
      ) : null}
    </HeaderStyled>
  );
}
