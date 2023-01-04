import styled from "styled-components";

export const HeaderStyled = styled.header`
    
    padding: 15px 10px;
    background-color: var(--color-grey-0);
    
    .divHeader{
        margin: 0 auto;
        max-width: 1400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .divLinksCart{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .linksHeader{
        display: flex;
        align-items: center;
        gap: 35px;
    }

    .linksHeaderMobile{
        display: none;
    }

    .cart{
        width: 50px;
    }

    .menu{
        width: 30px;
    }

    button{
        border: transparent;
        background-color: var(--color-grey-0);
    }

    .buttonMenu{
        display: none;
    }

    span{
        font-size: 18px;
        cursor: pointer;
    }

    @media(max-width: 620px){
        .buttonMenu{
            display: block;
        }

        .linksHeader{
            display: none;
        }

        .linksHeaderMobile{
            width: 100%;
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`