import { Header } from "../../components/Header";
import { HomeStyled } from "./styled";
import Modal from "react-modal";
import imageChild from "./../../assets/imageChild.png";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { modalPosition } from "../../components/Modal/modal";
import { Register } from "../../components/Modal";

Modal.setAppElement("#root");

export function Home() {
  const { openRegister, closeRegister, registerOpen } =
    useContext(ModalContext);

  return (
    <HomeStyled>
      <Header />
      <main>
        <section className="sectionImage">
          <img src={imageChild} alt="Criança" className="imageChild" />
          <div className="divTextButtonRegister">
            <div className="divContent">
              <p className="textHome">
                Brinquedos quase novos ou nunca usados procurando um novo dono.
                Compre online e receba em sua casa.
              </p>
              <Button
                width="fit-content"
                padding="small"
                styleButton="style1"
                fontSize="1.688rem"
                onClick={openRegister}
              >
                Cadastre-se
              </Button>
              <Modal
                isOpen={registerOpen}
                onRequestClose={closeRegister}
                style={modalPosition}
              >
                <Register />
              </Modal>
            </div>
          </div>
        </section>
        <section className="sectionList">
          <ul></ul>
        </section>
      </main>
    </HomeStyled>
  );
}
