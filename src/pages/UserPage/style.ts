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

  & form {
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: #fff;
    border-radius: var(--radius);
    max-width: 350px;

    & span + label {
      font-size: 0.85rem;
    }

    & div {
      display: flex;
      font-size: 12px;
      gap: 0.2rem;

      & input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
