import styled from "styled-components";

export const ButtonCartStyled = styled.div`

    position: relative;

    .cart{
        width: 50px;
    }
    
    button{
        border: transparent;
        background-color: var(--color-grey-0);
    }

    p{
        background-color: #fc4a1a;
        color: #fff;
        position: absolute;
        top: -5px;
        right: 0;
        padding: 3px 6px;
        border-radius: 50%;
        font-size: 16px;
    }

    h1{
        color: blue;
        font-size: 50px;
    }
`