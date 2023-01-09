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
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

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

  function logedUser() {
    if (isLogged === false) {
      toast.error(`Você deve estar logado!`, {
        style: {
          border: "1px solid #EB5757",
          padding: "16px",
          color: "#EB5757",
          background: "#F5F5F5",
        },
        iconTheme: {
          primary: "#EB5757",
          secondary: "#F5F5F5",
        },
      });
    } else {
      openModal();
    }
  }

  return (
    <HeaderStyled>
      <Toaster />
      <div className="divHeader">
        <Link to="/">
          <img src={logo} alt="Logo WeeToy" />
        </Link>
        <div className="divLinksCart">
          <div className="linksHeader">
            <span>Categoria</span>
            <span>Doações</span>
            <span onClick={logedUser}>Anunciar</span>
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
          <span onClick={logedUser}>Anunciar</span>
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
