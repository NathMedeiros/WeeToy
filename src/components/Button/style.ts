import styled, { css } from "styled-components";
import { iButtonProps } from "../../interfaces";

const variableStyle: any = {
  style1: css`
    background-color: #fc4a1a;
    color: #fff;
    border-radius: 0.75rem;
    font-size: 1.5rem;
    padding: 0.5rem 1.25rem;

    &:hover {
      background-color: #ff5e33;
    }
  `,
  style2: css`
    background-color: #f7b733;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;

    &:hover {
      background-color: #ffc64f;
    }
  `,
  style3: css`
    border: 0.0938rem solid #fc4a1a;
    background-color: #fff;
    color: #fc4a1a;
    font-size: 1.4375rem;
    border-radius: 0.75rem;
    padding: 0.75rem;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 100%;

    &:hover {
      background-color: #ebe8e8;
    }
  `,
  style4: css`
    border: 0.0938rem solid #f7b733;
    background-color: #fff;
    color: #f7b733;
    font-size: 1.4375rem;
    border-radius: 0.75rem;
    padding: 0.75rem;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 100%;

    &:hover {
      background-color: #ebe8e8;
    }
  `,
};

const variablePadding: any = {
  small: css`
    padding: 0.5rem 1rem;
  `,
  medium: css`
    padding: 1rem;
  `,
  big: css`
    padding: 1.5rem;
  `,
};

export const Button = styled.button<iButtonProps>`
  max-width: 100%;
  font-weight: 700;
  font-family: "inter", sans-serif;
  border: none;
  cursor: pointer;
  transition: 0.6s ease;
  ${({ styleButton }) => variableStyle[styleButton]}
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width }) => width};
  ${({ padding }) => padding && variablePadding[padding]}
`;
