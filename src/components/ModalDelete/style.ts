import styled from "styled-components";

export const Div = styled.div`
  width: 300x;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 10px 20px;

  p {
    font-family: var(--font-button);
  }

  button {
    font-family: var(--font-button);
    border-radius: 0.75rem;
    box-shadow: 0px 0.25rem 0.25rem rgb(0 0 0 / 25%);
    margin-top: 1rem;
    border: 1px solid red;
    color: red;
  }
`;
