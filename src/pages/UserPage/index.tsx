import React, { useState } from "react";
import { Header } from "../../components/Header";
import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import imageChild from "./../../assets/imageChild.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userDataSchema } from "./userDataSchema";
import { Button } from "../../components/Button";
import { ModalAnnounceContext } from "../../context/AnnounceContext";
import { Announce } from "../../components/ModalAnnounce/index";

import { UserData } from "../../components/UserData";
import Historic from "../../components/UserHistory";
import { MyAds } from "../../components/UserAds";
import { UserNav } from "../../components/UserNav";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState<string | null>("Meus Dados");

  function changePage(event: React.MouseEvent<HTMLButtonElement>) {
    setPageToRender(event.currentTarget.textContent);
  }

  return (
    <StyledUserPage>
      <Header />
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
    </StyledUserPage>
  );
}
