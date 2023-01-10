import styled from "styled-components";

export const CardProductStyled = styled.li`
  width: 224px;
  border-radius: 12px;
  background-color: #fff;

  & figure {
    width: 224px;
    height: 210px;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;

    & img {
      width: 100%;
    }
  }

  & .infoToy {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
  }

  & h3 {
    font-weight: 500;
  }
`;
