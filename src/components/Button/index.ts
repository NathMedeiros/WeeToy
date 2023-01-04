import styled, { css } from "styled-components";
import { iButtonProps } from "../../interfaces";

const variableStyle: any = {
    style1: css`
        background-color: #FC4A1A;
        color: #FFF;
    `,
    style2: css`
        background-color: #F7B733;
        color: #FFF;
    `,
    style3: css`
        border: 1.5px solid #FC4A1A;
        background-color: #FFF;
        color: #FC4A1A;
    `,
    style4: css`
        border: 1.5px solid #F7B733;
        background-color: #FFF;
        color: #F7B733;
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

    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    border: none;
    width: ${({ width }) => width};
    border-radius: ${({ radius }) => radius};
    ${({ padding }) => variablePadding[padding]};
    ${({ styleButton }) => variableStyle[styleButton]}
    cursor: pointer;
`