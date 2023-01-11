import styled from "styled-components";

export const StyledUserData = styled.div`
  margin: 0 0.4rem;
  height: fit-content;
  & form {
    margin: 5rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: #fff;
    border-radius: var(--radius);
    max-width: 350px;

    & label {
      font-size: 0.85rem;
    }

    & span {
      font-size: 0.7rem;
      color: red;
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

  @media (min-width: 620px){
    margin: 0;
    width: 70%;

    & form{
      margin: 0;
      max-width: 1000px;
      width: 100%;
      height: 100%;
    }

    
  }
`;
