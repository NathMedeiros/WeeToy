import styled from "styled-components";

export const StyledUserPage = styled.div`
  background-color: #4abdac40;
  height: 100vh;

  & nav {
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    column-gap: 10px;
    background-color: var(--color-grey-0);
    & button {
      font-weight: 700;
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    & .selected {
      color: var(--color-primary);
    }
  }
`;
