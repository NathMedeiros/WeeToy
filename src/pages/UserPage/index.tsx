import React, { useState } from "react";
import { Header } from "../../components/Header";

import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userDataSchema } from "./userDataSchema";
import { Button } from "../../components/Button";
import { UserHistory } from "../../components/UserHistory";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState("userData" as String);

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
      {/* <UserData /> */}
      <UserHistory />
      {/* <UserProducts/> */}
    </StyledUserPage>
  );
}
