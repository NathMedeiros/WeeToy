import { HeaderStyled } from "./styled";
import { useContext, useState } from "react";
import Modal from "react-modal";
import logo from "./../../assets/logoWeeToy.png";
import menu from "./../../assets/menu.png";
import { LoginContext } from "../../context/LoginContext";
import { Login } from "../Modal/auth";
import { ModalAnnounceContext } from "../../context/ModalAnnounceContext";
import { Announce } from "../ModalAnnounce";
import { ButtonCart } from "../ButtonCart";

export function Header() {
  const { openLogin, closeLogin, loginOpen } = useContext(LoginContext);
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
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <Login />
        </Modal>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
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
