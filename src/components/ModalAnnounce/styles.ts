import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  padding: 1rem;

  .announceTitle {
    font-family: "Seymour One", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.8125rem;

    color: #000000;
  }

  .subTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.75rem;

    color: #000000;
  }

  .nameMark {
    display: flex;
    gap: 2.75rem;
    justify-content: space-around;
    margin-top: 1.875rem;
  }

  select {
    width: 14.375rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0rem 0.375rem 0.75rem -0.125rem,
      rgba(0, 0, 0, 0.3) 0rem 0.1875rem 0.4375rem -0.1875rem;
    background-color: #fff;
    border-radius: 8px;
    border: none;
    padding: 12px 12px;
    height: 3rem;
    margin-bottom: 2.3125rem;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    font-family: "Inter", sans-serif;
    margin-left: 0.625rem;
    margin-bottom: 0.625rem;
  }

  .colDiv {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .categoryPrice {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .divColl {
    display: flex;
    gap: 2.75rem;
    justify-content: space-around;
  }

  textarea {
    width: 29.6875rem;
    height: 10.625rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background-color: #fff;
    border-radius: 0.5rem;
    border: none;
    resize: none;
    padding: 0.75rem 0.75rem;
  }

  button {
    background: #f4f4f4;
    border: 0.1875rem solid #fc4a1a;
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 0.75rem;
    height: 5rem;
    width: 81%;

    font-family: "Seymour One", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.8125rem;

    color: #fc4a1a;
  }

  .nameCategoryPriceDiv {
    display: flex;
    flex-direction: column;
    gap: 27px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    .nameMark {
      gap: 3rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.9375rem;
      margin-top: 0rem;
    }

    .divColl {
      justify-content: center;
      align-items: center;
    }

    .categoryPrice {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0px;
      width: 80%;
    }

    select {
      width: 15.3125rem;
      margin-bottom: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .nameCategoryPriceDiv {
      align-items: center;
      gap: 1rem;
    }

    textarea {
      width: 15.3125rem;
      height: 12.4375rem;
      margin-bottom: 14px;
      box-sizing: border-box;
    }
    button {
      width: 60%;
      font-size: 2.6875rem;
      font-weight: 400;
      font-size: 25px;
      line-height: 19px;
      height: 48px;
      margin-top: 2rem;
    }
    .announceTitle {
      font-size: 26px;
      line-height: 22px;
      margin-bottom: 3.375rem;
    }
    .subtitle {
      display: none;
    }
    .divColl {
      gap: 3rem;
    }
  }

  @media (max-width: 700px) {
    .nameMark {
      flex-direction: column;
      gap: 0.9375rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.9375rem;
      margin-top: 0rem;
    }

    .divColl {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .categoryPrice {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0px;
      width: 80%;
    }

    select {
      margin-bottom: 2.5rem;
      width: 15.3125rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .nameCategoryPriceDiv {
      align-items: center;
      gap: 0rem;
    }
    button {
      width: 14.625rem;
      height: 2.9375rem;
      font-size: 1.6875rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
    }
    textarea {
      width: 15.3125rem;
      height: 5.4375rem;
      margin-bottom: 1.1875rem;
    }
    .announceTitle {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 3.375rem;
    }
    .subtitle {
      display: none;
    }
    .divColl {
      gap: 0rem;
    }
  }
`;
