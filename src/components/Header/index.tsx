import { HeaderStyled } from "./styled";
import { useContext, useState } from "react";
import Modal from "react-modal";
import logo from "./../../assets/logoWeeToy.png";
import imageUser from "./../../assets/user.png";
import menu from "./../../assets/menu.png";
import lupa from "./../../assets/lupa.png";
import { Login } from "../Modal/auth";
import { ModalAnnounceContext } from "../../context/AnnounceContext";
import { Announce } from "../ModalAnnounce";
import { ButtonCart } from "../ButtonCart";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RegisterContext } from "../../context/RegisterContext";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

interface iHeaderProps {
  userPage?: boolean;
}

export function Header({ userPage }: iHeaderProps) {
  const { openLogin, closeLogin, loginOpen } = useContext(RegisterContext);
  const { openModal, closeModal, isOpen } = useContext(ModalAnnounceContext);
  const { isLogged, setLogged, setSearch } = useContext(AuthContext);

  const [linksMobile, setLinksMobile] = useState(false);
  const [input, setInput] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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

    location.pathname === "/" ? navigate(0) : navigate("/");
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

  function openInput() {
    if (input) {
      setInput(false);
    } else {
      setInput(true);
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
            {userPage ? (
              <Link to="/" className="linkUser">
                Home
              </Link>
            ) : null}

            <div className="input-search">
              <input
                className={input ? "show-input" : "hide-input"}
                type="text"
                placeholder="Pesquise..."
                onChange={(event) =>
                  setSearch(event.target.value.toLowerCase())
                }
              />
              <button onClick={openInput} className="lupa">
                <img src={lupa} alt="" />
              </button>
            </div>

            <span onClick={logedUser}>Anunciar</span>
            {isLogged === true ? (
              <div className="divUser">
                <img src={imageUser} alt="Logo usuário" />
                <div className="optionsUser">
                  <Link to="/UserPage" className="linkUser">
                    Ver perfil
                  </Link>
                  <span className="logout" onClick={logout}>
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
          {userPage ? (
            <Link to="/" className="linkUser">
              Home
            </Link>
          ) : null}

          <div className="input-search">
            <input
              className={input ? "show-input" : "hide-input"}
              type="text"
              placeholder="Pesquise..."
              onChange={(event) => setSearch(event.target.value.toLowerCase())}
            />
            <button onClick={openInput} className="lupa">
              <img src={lupa} alt="" />
            </button>{" "}
          </div>

          <span onClick={logedUser}>Anunciar</span>
          {isLogged === true ? (
            <div className="divUser">
              <img src={imageUser} alt="Logo usuário" />
              <div className="optionsUser">
                <Link to="/UserPage" className="linkUser">
                  Ver perfil
                </Link>
                <span className="logout" onClick={logout}>
                  Logout
                </span>
              </div>
            </div>
          ) : (
            <span onClick={openLogin}>Login</span>
          )}
        </div>
      ) : null}
    </HeaderStyled>
  );
}
