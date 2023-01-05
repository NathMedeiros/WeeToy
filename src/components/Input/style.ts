import { iInputStyleProps } from "./../../interfaces/index";
import styled from "styled-components";

export const InputStyle = styled.fieldset<iInputStyleProps>`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: ${({ width }) => width};
  max-width: 100%;
  border: none;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    & > label {
      font-size: 0.85rem;
      font-weight: 500;
      color: #000;
      font-family: "Inter", sans-serif;
    }

    & > input {
      width: 100%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      background-color: #fff;
      border-radius: 0.5rem;
      border: none;
      padding: 0.75rem 0.75rem;
    }
  }

  & > span {
    font-size: 0.875rem;
    font-weight: 400;
    color: red;
  }
`;
