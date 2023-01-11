import React, { useState, useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { iFormRegister, iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import imageChild from "./../../assets/imageChild.png";
import Modal from "react-modal";
import { EditProductContext } from "../../context/EditProductContext";
import { UserData } from "../../components/UserData";
import { Historic } from "../../components/UserHistory";
import { MyAds } from "../../components/UserAds";
import { UserNav } from "../../components/UserNav";
import { ModalEditProduct } from "../../components/ModalEditProduct";
import { toast, Toaster } from "react-hot-toast";
import { Footer } from "../../components/Footer";
import { api } from "../../request/api";
import { useNavigate } from "react-router";

export function UserPage({ children }: iUserPage) {
  const { openEditProduct, setOpenEditProduct, modalInfo } =
    useContext(EditProductContext);

  const [pageToRender, setPageToRender] = useState<string | null>("Meus Dados");
  const [userData, setUserData] = useState({} as iFormRegister);

  function changePage(event: React.MouseEvent<HTMLButtonElement>) {
    setPageToRender(event.currentTarget.textContent);
  }

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
  const token = localStorage.getItem("@TOKEN: WeeToys")!;

  useEffect(() => {
    async function loadUserData() {
      try {
        const request = await toast.promise(
          api.get(`/users/${user.id}`, {
            headers: { authorization: `Bearer ${token}` },
          }),
          {
            loading: "Carregando dados do usuário",
            success: "Dados carregados com sucesso!",
            error: "Houve um erro...",
          },
          { id: "data-loading" }
        );
        const { address, birth_date, cep, email, name } = request.data;
        setUserData(request.data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }
    loadUserData();
  }, []);

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
      <Header />
      <main>
        <section className="sectionImage">
          <img src={imageChild} alt="Imagem criança" className="imageChild" />
        </section>
        <section className="content">
          <div className="divContent">
            <UserNav handleChange={changePage} />
            {pageToRender === "Meus Dados" && (
              <UserData userData={userData} userId={user.id} token={token} />
            )}
            {pageToRender === "Compras" && (
              <Historic historicList={userData.purchases_historic} />
            )}
            {pageToRender === "Anúncios" && <MyAds userAds={userData.toy} />}
          </div>
        </section>
      </main>
      <Footer />
    </StyledUserPage>
  );
}
