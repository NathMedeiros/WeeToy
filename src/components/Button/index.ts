import styled, { css } from "styled-components";
import { iButtonProps } from "../../interfaces";

const variableStyle: any = {
    style1: css`
        background-color: #FC4A1A;
        color: #FFF;
        border-radius: 0.75rem;
        font-size: 1.5rem;
        padding: 0.5rem 1.25rem;

        &:hover{
            background-color: #ff5e33;
        }
    `,
    style2: css`
        background-color: #F7B733;
        color: #FFF;
        padding: 0.5rem 1rem;
        font-size: 1rem;

        &:hover{
            background-color: #ffc64f;
        }
    `,
    style3: css`
        border: 0.0938rem solid #FC4A1A;
        background-color: #FFF;
        color: #FC4A1A;
        font-size: 1.4375rem;
        border-radius: 0.75rem;
        padding: 0.75rem;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

        &:hover{
            background-color: #ebe8e8;
        }
    `,
    style4: css`
        border: 0.0938rem solid #F7B733;
        background-color: #FFF;
        color: #F7B733;
        font-size: 1.4375rem;
        border-radius: 0.75rem;
        padding: 0.75rem;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

        &:hover{
            background-color: #ebe8e8;
        }
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

    font-weight: 400;
    font-family: var(--font-button);
    border: none;
    cursor: pointer;
    transition: 0.6s ease;
    ${({ styleButton }) => variableStyle[styleButton]}
    font-size: ${({ fontSize }) => fontSize};
    width: ${({ width }) => width};
    ${({ padding }) => padding && variablePadding[padding]}
`