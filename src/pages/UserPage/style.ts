import styled from "styled-components";

export const StyledUserPage = styled.div`
  height: 100vh;

  main {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .sectionImage {
    width: 100%;
    height: 200px;
    padding-top: 51px;
  }

  .imageChild {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    width: 100%;
  }

  .divContent {
    width: 100%;
    position: absolute;
    top: 0px;
  }

  @media (min-width: 620px) {
    .sectionImage {
      width: 100%;
      height: 200px;
      padding: 0;
    }

    .imageChild {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content {
      width: 95%;
      margin: 0 auto;
    }

    .divContent {
      width: 95%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 90px;
      height: 500px;
      gap: 20px;
    }
  }
`;
