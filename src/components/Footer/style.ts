import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 1rem;
  background-color: var(--color-primary);

  & a {
    color: #fff;
    text-decoration: none;
  }

  & > h3 {
    text-align: center;
  }
  & h3 {
    font-weight: 700;
    color: #237c6e;
  }
  & section {
    display: flex;
    justify-content: space-between;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;

    div {
      display: flex;
      flex-direction: column;
      & h3 {
        margin-bottom: 10px;
      }

      & a {
        line-height: 26px;
        display: flex;
        align-items: center;

        &:hover {
          transition: 0.3s;
          transform: scale(1.1);
          color: #237c6e;
        }
      }
    }
  }
`;
