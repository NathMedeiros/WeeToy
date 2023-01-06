import React, { useContext, useState } from "react";
import { Header } from "../../components/Header";

import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userDataSchema } from "./userDataSchema";
import { Button } from "../../components/Button";
import { ModalAnnounceContext } from "../../context/ModalAnnounceContext";
import { Announce } from "./../../components/ModalAnunciar copy/index";
import { UserData } from "../../components/UserData";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState("userData" as String);
  const { isOpen } = useContext(ModalAnnounceContext);
  console.log(isOpen);

  function changePage() {
    pageToRender === "userData"
      ? setPageToRender("History")
      : setPageToRender("userData");
  }

  return (
    <StyledUserPage>
      <Header />
      <nav>
        <button className="selected">Meus Dados</button>
        <button>Histórico</button>
        <button>Anúncios</button>
      </nav>
      <UserData />
    </StyledUserPage>
  );
}
