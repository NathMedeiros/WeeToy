import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Seymour+One&display=swap');

    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root{
        --color-grey-0: #f4f4f4;
        --font-button: font-family: 'Seymour One', sans-serif;
    }

    button{
        cursor: pointer;
    }
`