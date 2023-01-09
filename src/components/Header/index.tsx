import { HeaderStyled } from "./styled";
import { useContext, useState } from "react";
import Modal from "react-modal";
import logo from "./../../assets/logoWeeToy.png";
import imageUser from "./../../assets/user.png";
import menu from "./../../assets/menu.png";
import { Login } from "../Modal/auth";
import { ModalAnnounceContext } from "../../context/AnnounceContext";
import { Announce } from "../ModalAnnounce";
import { ButtonCart } from "../ButtonCart";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContext } from "../../context/RegisterContext";

export function Header() {
  const { openLogin, closeLogin, loginOpen } = useContext(RegisterContext);
  const { openModal, closeModal, isOpen } = useContext(ModalAnnounceContext);
  const { isLogged, setLogged } = useContext(AuthContext);

  const [linksMobile, setLinksMobile] = useState(false);

  const navigate = useNavigate();

  function changeStatusLinksMobile() {
    if (linksMobile === false) {
      setLinksMobile(true);
    } else {
      setLinksMobile(false);
    }
  }

  function logout() {
    localStorage.removeItem("@TOKEN: WeeToys");
    localStorage.removeItem("@USER: WeeToys");
    setLogged(false);
    navigate("/");
  }

  return (
    <HeaderStyled>
      <div className="divHeader">
        <Link to="/">
          <img src={logo} alt="Logo WeeToy" />
        </Link>
        <div className="divLinksCart">
          <div className="linksHeader">
            <span>Categoria</span>
            <span>Doações</span>
            <span onClick={openModal}>Anunciar</span>
            {isLogged === true ? (
              <div className="divUser">
                <img src={imageUser} alt="Logo usuário" />
                <div className="optionsUser">
                  <Link to="/UserPage" className="linkUser">
                    Ver perfil
                  </Link>
                  <span
                    className="logout"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </span>
                </div>
              </div>
            ) : (
              <span onClick={openLogin}>Login</span>
            )}
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
          className="modal-content-announce"
        >
          <Announce />
        </Modal>
      </div>
      {linksMobile === true ? (
        <div className="linksHeaderMobile">
          <span>Categoria</span>
          <span>Doações</span>
          <span onClick={openModal}>Anunciar</span>
          {isLogged === true ? (
            <Link to="/UserPage">
              <img src={imageUser} alt="Logo usuário" />
            </Link>
          ) : (
            <span onClick={openLogin}>Login</span>
          )}
        </div>
      ) : null}
    </HeaderStyled>
  );
}
