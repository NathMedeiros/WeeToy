import { useState } from "react";
import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState("userData" as String);

  function changePage() {
    pageToRender === "userData"
      ? setPageToRender("History")
      : setPageToRender("userData");
  }

  return (
    <StyledUserPage>
      <nav>
        <h2>Meus Dados</h2>
        <h2>Histórico de compras</h2>
      </nav>
      {pageToRender === "userData" ? <h1>User Data</h1> : <h1>History data</h1>}
      <button onClick={changePage}>MUDAR</button>
    </StyledUserPage>
  );
}
