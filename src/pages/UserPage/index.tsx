import React, { useContext, useState } from "react";
import { Header } from "../../components/Header";

import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userDataSchema } from "./userDataSchema";
import { Button } from "../../components/Button";
import { ModalAnnounceContext } from "../../context/ModalAnnounceContext";
import { Announce } from "../../components/ModalAnnounce/index";
import { UserData } from "../../components/UserData";
import Historic from "../../components/Historic";
import MyAds from "../../components/MyAds";
import { UserNav } from "../../components/UserNav";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState([true, false, false]);
  const { isOpen } = useContext(ModalAnnounceContext);

  function changePage(event: React.ChangeEventHandler) {
    console.log(event);
  }

  return (
    <StyledUserPage>
      <Header />
      <UserNav handleChange={changePage} />
      <Historic />
    </StyledUserPage>
  );
}
