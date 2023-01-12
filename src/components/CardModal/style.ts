import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  button {
    border: solid 1px #f7b733;
    background-color: #fff;
    color: #f7b733;
    width: 30px;
    border-radius: 8px;
    height: 30px;
    font-size: 16px;
    margin-right: 20px;
  }

  img {
    width: 130px;
    margin-left: 20px;
    border-radius: 0.375rem;
  }
`;

export const DivBuy = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  p {
    margin-top: 10px;
  }
`;
