import styled from "styled-components";

export const CardProductStyled = styled.li`
    width: 224px;
    border: 1px solid #fff;
    border-radius: 12px;
    background-color: #fff;

    img{
        width: 224px;
        height: 210px;
        object-fit: cover;
        border-radius: 12px;
    }

    .infoToy{
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;
    }

    h3{
        font-weight: 500;
    }
`