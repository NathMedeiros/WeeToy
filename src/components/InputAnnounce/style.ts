import { iInputStyleProps } from "../../interfaces/index";
import styled from "styled-components";

export const InputAnnounceStyle = styled.fieldset<iInputStyleProps>`
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
    margin-bottom: 37px;

    @media (max-width: 1200px) {
      margin-bottom: 0;
      width: 245px;
      position: relative;
      height: 70px;
    }

    @media (max-width: 700px) {
      align-items: center;
      margin-bottom: 0;
      width: 245px;
      position: relative;
      height: 70px;
    }

    & > label {
      font-size: 1rem;
      font-weight: 500;
      color: #000;
      font-family: "Inter", sans-serif;
      margin-left: 10px;
      margin-bottom: 10px;

      @media (max-width: 700px) {
        position: absolute;
        left: 0;
        top: -30px;
      }
    }

    & > input {
      width: 100%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      background-color: #fff;
      border-radius: 0.5rem;
      border: none;
      padding: 0.75rem 0.75rem;
      height: 48px;

      @media (max-width: 1200px) {
        width: 245px;
      }

      @media (max-width: 700px) {
        width: 245px;
      }
    }
  }

  & > span {
    font-size: 0.875rem;
    font-weight: 400;
    color: red;
  }

  @media (max-width: 1200px) {
    align-items: center;
    width: 245px;
  }
  @media (max-width: 700px) {
    align-items: center;
    width: 245px;
  }
`;
