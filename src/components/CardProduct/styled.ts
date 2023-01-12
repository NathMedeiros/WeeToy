import styled from "styled-components";

export const CardProductStyled = styled.li`
  width: 224px;
  border-radius: 12px;
  background-color: #fff;
  transition: 0.4s ease;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      var(--color-primary) 0px 5px 9px -5px;
    transform: scale(1.1);
  }

  & figure {
    width: 224px;
    height: 210px;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;

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
