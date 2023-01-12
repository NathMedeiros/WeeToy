import styled from "styled-components";

export const CartProductStyled = styled.li`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .imageToy{
        width: 130px;
        height: 119px;
        object-fit: cover;
    }

    div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button{
        background-color: #fff;
        border: transparent;
    }

    @media(max-width: 620px){
        div{
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
    }
`