import React, { useState } from "react";
import { Header } from "../../components/Header";
import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import { UserData } from "../../components/UserData";
import Historic from "../../components/UserHistory";
import MyAds from "../../components/UserAds";
import { UserNav } from "../../components/UserNav";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState<string | null>("Meus Dados");

  function changePage(event: React.MouseEvent<HTMLButtonElement>) {
    setPageToRender(event.currentTarget.textContent);
  }

  return (
    <StyledUserPage>
      <Header />
      <UserNav handleChange={changePage} />
      {pageToRender === "Meus Dados" && <UserData />}
      {pageToRender === "Compras" && <Historic />}
      {pageToRender === "Anúncios" && <MyAds />}
    </StyledUserPage>
  );
}
