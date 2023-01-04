import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root{
        --color-grey-0: #f4f4f4;
    }

    button{
        cursor: pointer;
    }
`