import styled from "styled-components";

export const Div = styled.div`
  width: 300x;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 20px;

  p {
    font-family: var(--font-button);

    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
  }

  button {
    font-family: var(--font-button);
    width: 200px;
    height: 48px;

    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
    border-radius: 0.75rem;
    box-shadow: 0px 0.25rem 0.25rem rgb(0 0 0 / 25%);
    margin-bottom: 30px;
    border: 1px solid red;
    color: red;
  }
`;
