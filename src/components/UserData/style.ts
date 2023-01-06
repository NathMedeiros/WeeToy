import styled from "styled-components";

export const StyledUserData = styled.div`
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
