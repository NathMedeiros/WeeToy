import styled from "styled-components";

export const ModalCartStyled = styled.div`

    background-color: #fff;
    width: 50vw;
    border-radius: 12px;

    .cartTitle{
        width: 100%;
        background-color: var(--color-primary);
        border-radius: 12px 12px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        font-size: var(--size-1);
        font-family: var(--font-button);
        color: #fff;
    }

    .emptyCart{
        background-color: #f9f9f9;
        padding: 20px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 0 0 12px 12px;
    }

    .emptyCart p{
        font-size: 22px;
    }

    .cartOn{
        width: 100%;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 12px 12px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .cartOn ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-height: 350px;
        padding-bottom: 10px;
        overflow-y: scroll;
    }

    .totalCart{
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid #f7b733;
        border-radius: 12px;    
    }

    @media(max-width: 620px){
        width: 80vw;
    }
`
