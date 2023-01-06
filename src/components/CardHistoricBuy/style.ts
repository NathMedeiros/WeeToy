import styled from "styled-components";

export const CardHistoricBuyStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0.5rem;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  background-color: #fff;

  & > div:nth-child(1) {
    width: 4.625rem;
    height: 4.625rem;
    background-color: #d8d8d8;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  & > span {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    text-align: center;
  }

  @media (min-width: 620px) {
    border-radius: 0.75rem;
  }
`;
