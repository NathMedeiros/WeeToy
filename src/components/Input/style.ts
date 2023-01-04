import { iInputStyleProps } from "./../../interfaces/index"
import styled from "styled-components";

export const InputStyle = styled.fieldset<iInputStyleProps>`

    display: flex;
    flex-direction: column;
    gap: 0.10rem;
    width: ${({ width }) => width};
    max-width: 100%;

    & > div{
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        & > label{
            font-size: 1.15rem;
            font-weight: 400;
            color: #000;
        }

        & > input{
            width: 100%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background-color: #FFF;
            border-radius: 0.75rem;
            border: none;
            padding: 0.5rem 0.75rem;
        }
    }

    & > span{
        font-size: 0.875rem;
        font-weight: 400;
        color: red;
    }
`