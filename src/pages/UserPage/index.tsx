import React, { useState, useContext } from "react";
import { Header } from "../../components/Header";
import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import imageChild from "./../../assets/imageChild.png";
import Modal from "react-modal";
import { EditProductContext } from "../../context/EditProductContext";
import { UserData } from "../../components/UserData";
import Historic from "../../components/UserHistory";
import { MyAds } from "../../components/UserAds";
import { UserNav } from "../../components/UserNav";
import { ModalEditProduct } from "../../components/ModalEditProduct";
import { Toaster } from "react-hot-toast";
import { Footer } from "../../components/Footer";

export function UserPage({ children }: iUserPage) {
  const { openEditProduct, setOpenEditProduct, modalInfo } =
    useContext(EditProductContext);

  const [pageToRender, setPageToRender] = useState<string | null>("Meus Dados");

  function changePage(event: React.MouseEvent<HTMLButtonElement>) {
    setPageToRender(event.currentTarget.textContent);
  }

  return (
    <StyledUserPage>
      <Toaster />
      <Modal
        isOpen={openEditProduct}
        onRequestClose={() => setOpenEditProduct(false)}
        overlayClassName="modal-overlay"
        className="modal-content-home"
      >
        <ModalEditProduct
          img={modalInfo.img}
          toy_name={modalInfo.toy_name}
          category={modalInfo.category}
          id={modalInfo.id}
          price={modalInfo.price}
          marks={modalInfo.marks}
          description={modalInfo.description}
        />
      </Modal>
      <Header userPage={true} />
      <main>
        <section className="sectionImage">
          <img src={imageChild} alt="Imagem criança" className="imageChild" />
        </section>
        <section className="content">
          <div className="divContent">
            <UserNav handleChange={changePage} />
            {pageToRender === "Meus Dados" && <UserData />}
            {pageToRender === "Compras" && <Historic />}
            {pageToRender === "Anúncios" && <MyAds />}
          </div>
        </section>
      </main>
      <Footer />
    </StyledUserPage>
  );
}
