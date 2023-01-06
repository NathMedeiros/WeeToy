import styled from "styled-components";

export const MyAdsStyled = styled.div`
  margin: 0 0.4rem;
`;

export const UlAds = styled.ul`
  margin-bottom: 20px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: var(--radius);
  max-width: 350px;

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
    justify-content: space-between;
    border-radius: 12px;

    img {
      padding: 10px;
    }

    p {
      padding: 10px;
      font-size: 14px;
    }
  }
`;

export const ImgEdit = styled.img`
  width: 38px;
  height: 38px;
`;
