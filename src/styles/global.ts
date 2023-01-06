import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Seymour+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    :root{
        --color-primary: #4abdac;
        --color-grey-0: #f4f4f4;
        --font-button: 'Seymour One', sans-serif;
        --size-1: 1.688rem;
        --radius: 0.75rem;
    }

    body{
        font-family: 'Inter', sans-serif;
        width: 100%;
        min-height: 100vh;
    }

    button{
        cursor: pointer;
    }

    .modalCart{
        position: fixed;
        top: 10%;
        right: 25%;
    }

    @media(max-width: 620px){
        .modalCart{
            right: 9%;
        }
    }
`;




