import styled from "styled-components";

export const StyledNav = styled.nav`
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  background-color: var(--color-grey-0);

  & label {
    cursor: pointer;

    &:has(input:checked) {
      color: var(--color-primary);
    }
  }

  & input {
    display: none;
  }
`;
