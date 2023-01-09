import styled from "styled-components";

export const HomeStyled = styled.div`
  main {
    width: 100%;
  }

  .sectionImage {
    width: 100%;
    height: 200px;
    position: relative;
  }

  .imageChild {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .divTextButtonRegister {
    position: absolute;
    top: 0;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
  }

  .divContent {
    margin: 0 auto;
    max-width: 1400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .textHome {
    max-width: 813px;
    color: #fff;
    font-size: var(--size-1);
    font-family: var(--font-button);
  }

  .sectionList {
    padding: 30px 10px;
    background-color: rgba(74, 189, 172, 0.4);
  }

  .listProducts {
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
  }

  @media (max-width: 620px) {
    .divContent {
      flex-direction: column;
      justify-content: center;
      gap: 25px;
    }

    .textHome {
      font-size: var(--size-2);
      text-align: center;
    }

    .listProducts {
      flex-wrap: nowrap;
      overflow-x: scroll;
      padding-bottom: 20px;

      ::-webkit-scrollbar-track {
        background-color: var(--color-grey-0);

        border-radius: 10px;
      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 10px;
        background: var(--color-grey-0);
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
        border-radius: 10px;
      }
    }
  }
`;
