import styled from "styled-components";

export const ModalEditProductStyle = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    & > h2{
        font-size: 1rem;
        font-family: var(--font-button);
        font-weight: 400;
        text-align: center;
    }

    & > form{
        display: flex;
        flex-direction: column;
        gap: 2rem;

        & > div{
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;

            span{
                font-size: 0.875rem;
                font-weight: 400;
                color: red;
            }

            & > div:nth-child(1){
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                width: 100%;

                & > div{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    & > div:nth-child(1) {
                        width: 100%;

                        & > fieldset:nth-child(1){
                            display: flex;
                            flex-direction: column;
                            gap: 0.25rem;
                            width: 100%;

                            & > label {
                                font-size: 0.85rem;
                                font-weight: 500;
                                color: #000;
                            }

                            & > select{
                                width: 100%;
                                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                                background-color: #fff;
                                border-radius: 0.5rem;
                                border: none;
                                padding: 0.75rem 0.75rem;
                            }
                        }
                    }

                    & > div:nth-child(2){
                        width: 100%;
                    }
                }
            }

            & > div:nth-child(2){
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                width: 100%;

                & > fieldset:nth-child(2){
                        display: flex;
                        flex-direction: column;
                        gap: 0.25rem;

                        & > label {
                            font-size: 0.85rem;
                            font-weight: 500;
                            color: #000;
                        }

                        & > textarea{
                            width: 100%;
                            height: 4rem;
                            padding: 0.75rem;
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: #fff;
                            border-radius: 0.5rem;
                            border: none;
                            resize: none;
                        }
                }
            }
        }

        
        & > button{
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
    }

    @media (min-width: 750px) {
        width: 83.3125rem;
        gap: 2.5rem; 
        padding: 0 4rem 1.5rem 4rem;

        & > h2{
            font-size: 2.25rem;
        }

        & > form{
            gap: 4rem;

            & > div{
                flex-direction: row;
                gap: 4rem;

                & > div:nth-child(1){

                    & > div{
                        flex-direction: row;
                        gap: 2.5rem;
                    }
                }

                & > div:nth-child(2){

                    & > fieldset:nth-child(2){
                        height: 100%;

                        & > textarea{
                            height: 100%;
                        }
                    }
                }
            }

            & > button{
                padding: 0.75rem;
                font-size: 1.4375rem;
            }
        }
    }
`