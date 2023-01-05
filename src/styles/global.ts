import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Seymour+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    :root{
        --color-primary: #4abdac;
        --color-grey-0: #f4f4f4;
        --font-button: font-family: 'Seymour One', sans-serif;
        --size-1: 1.688rem;

    }

    body{
        font-family: 'Inter', sans-serif;
        width: 100%;
        min-height: 100vh;
    }

`