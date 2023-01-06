import { HeaderStyled } from "./styled";
import { useContext, useState } from "react";
import Modal from "react-modal";
import logo from "./../../assets/logoWeeToy.png";
import imageCart from "./../../assets/cart.png";
import menu from "./../../assets/menu.png";
import { LoginContext } from "../../context/LoginContext";
import { Login } from "../Modal/auth";
import { modalPosition } from "../Modal/modal";

export function Header() {
  const { openLogin, closeLogin, loginOpen } = useContext(LoginContext);

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
            <span>Anunciar</span>
            <span onClick={openLogin}>Login</span>
          </div>
          <button>
            <img src={imageCart} alt="Logo do carrinho" className="cart" />
          </button>
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
