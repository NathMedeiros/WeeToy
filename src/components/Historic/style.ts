import styled from "styled-components";

export const StyledHistoric = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: #fff;
  border-radius: var(--radius);
  max-width: 350px;
`;

export const UlHistoric = styled.ul`
  margin-bottom: 20px;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  li {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: flex;
    margin-bottom: 30px;
    align-items: center;

    img {
      padding: 10px;
    }

    p {
      margin-left: 40px;
      padding: 10px;
    }
  }
`;
