import { StyledNav } from "./style";

export function UserNav({ handleChange }: any) {
  return (
    <StyledNav>
      <label htmlFor="myData" onClick={handleChange}>
        Meus Dados
        <input
          value="myData"
          defaultChecked
          type="radio"
          id="myData"
          name="navItem"
        />
      </label>

      <label htmlFor="boughtList" onClick={handleChange}>
        Compras
        <input value="boughtList" type="radio" id="boughtList" name="navItem" />
      </label>

      <label htmlFor="myAnnouces" onClick={handleChange}>
        Anúncios
        <input
          value="annouceList"
          type="radio"
          id="myAnnouces"
          name="navItem"
        />
      </label>
    </StyledNav>
  );
}
