import { Header } from "../../components/Header";
import { HomeStyled } from "./styled";
import Modal from "react-modal";
import imageChild from "./../../assets/imageChild.png";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { Register } from "../../components/Modal/auth";
import { CardProduct } from "../../components/CardProduct";
import { RegisterContext } from "../../context/RegisterContext";
import { AuthContext } from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";
import { CardModal } from "../../components/CardModal";
import { Footer } from "../../components/Footer";

export function Home() {
  const { openRegister, closeRegister, registerOpen } =
    useContext(RegisterContext);

  const { filter } = useContext(AuthContext);

  const { isLogged, userId } = useContext(AuthContext);

  return (
    <HomeStyled>
      <Toaster />
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
              {isLogged === true ? null : (
                <Button
                  padding="small"
                  styleButton="style1"
                  fontSize="1.688rem"
                  onClick={openRegister}
                >
                  Cadastre-se
                </Button>
              )}

              <Modal
                isOpen={registerOpen}
                onRequestClose={closeRegister}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
              >
                <Register />
              </Modal>

              <CardModal />
            </div>
          </div>
        </section>
        <section className="sectionList">
          <ul className="listProducts">
            {filter.map((toy) => {
              if (toy.userId !== userId) {
                return (
                  <CardProduct
                    key={toy.id}
                    name={toy.toy_name}
                    price={toy.price}
                    img={toy.img}
                    id={toy.id}
                  />
                );
              } else {
                return null;
              }
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </HomeStyled>
  );
}
