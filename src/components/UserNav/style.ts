import styled from "styled-components";

export const StyledNav = styled.nav`
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  column-gap: 20px;
  background-color: var(--color-grey-0);

  & label {
    cursor: pointer;

    &:has(input:checked) {
      color: var(--color-primary);
    }
  }

  & input {
    display: none;
  }

  @media (min-width: 620px){
    flex-direction: column;
    border-radius: 12px;
    justify-content: space-evenly;
    margin: 0;
    padding: 0 30px;

    label{
      font-size: var(--size-1);
    }
  }
`;
