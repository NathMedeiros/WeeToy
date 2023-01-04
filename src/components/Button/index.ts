import styled, { css } from "styled-components";
import { iButtonProps } from "../../interfaces";

const variableStyle: any = {
    style1: css`
        background-color: #FC4A1A;
        color: #FFF;
        border-radius: 0.75rem;
        font-size: 1.6875rem;
    `,
    style2: css`
        background-color: #F7B733;
        color: #FFF;
        padding: 0.5rem 1rem;
        font-size: 1rem;
    `,
    style3: css`
        border: 1.5px solid #FC4A1A;
        background-color: #FFF;
        color: #FC4A1A;
        font-size: 1.4375rem;
        border-radius: 0.75rem;
    `,
    style4: css`
        border: 1.5px solid #F7B733;
        background-color: #FFF;
        color: #F7B733;
        font-size: 1.4375rem;
        border-radius: 0.75rem;
    `
}

const variablePadding: any = {
    small: css`
        padding: 0.5rem 1rem;
    `,
    medium: css`
        padding: 1rem;
    `,
    big: css`
        padding: 1.5rem;
    `
}

export const Button = styled.button<iButtonProps>`

    ${({ styleButton }) => variableStyle[styleButton]}
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 400;
    font-family: var(--font-button);
    border: none;
    width: ${({ width }) => width};
    ${({ padding }) => padding && variablePadding[padding]}
    cursor: pointer;
`