import { Header } from "../../components/Header";
import { HomeStyled } from "./styled";
import Modal from "react-modal";
import imageChild from "./../../assets/imageChild.png";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { ModalContext } from "../../context/AuthContext";
import { modalPosition } from "../../components/Modal/modal";

import { Register } from "../../components/Modal/auth";
import { CardProduct } from "../../components/CardProduct";

export const dataToys = [
  {
      id: 1,
      name: "Coruja Rosa",
      price: 25.00,
      img: "https://toymania.vteximg.com.br/arquivos/ids/937581-375-375/Brinquedo-Interativo-Owleez-Coruja-Rosa---Sunny.jpg?v=637090929524000000"
  },
  {
      id: 2,
      name: "Monstro Carinha Surpresa",
      price: 50.00,
      img: "https://www.cellshop.com/7016717-thickbox_default/brinquedos-fisher-price-monstro-carinha-surpresa-ffc30-autoexpressao.jpg"
  },
  {
      id: 3,
      name: "Fofomóvel",
      price: 15.00,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKNxOaGVdj4lFDhLovT2ZdrmSOZ-CQ7IkRA&usqp=CAU"
  },
  {
      id: 4,
      name: "Boliche Colorido",
      price: 30.00,
      img: "https://cdn.sistemawbuy.com.br/arquivos/1945cf2aa53f644df14c4dd21a5ee14d/produtos/KE2VE9/f13e03f239-5ff7048d2fed2.jpg"
  },
  {
      id: 5,
      name: "Pick-Up Militar",
      price: 35.00,
      img: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/carro-pick-up-militar-roma-brinquedos_515595.jpg"
  },
  {
      id: 6,
      name: "Baby Dino",
      price: 12.50,
      img: "https://www.comprafacil.com.br/wp-content/webpc-passthru.php?src=https://www.comprafacil.com.br/wp-content/uploads/2021/12/brinquedo-para-bebe-dino-papa-tudo-com-acessrios-elka-multicor.jpg&nocache=1"
  }
]





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
          <ul className="listProducts">
            {dataToys.map((toy)=>{
              return(
                <CardProduct key={toy.id} name={toy.name} price={toy.price} img={toy.img} id={toy.id}/>
              )
            })}
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
}
