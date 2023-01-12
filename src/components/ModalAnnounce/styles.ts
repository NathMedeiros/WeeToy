import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 0.75rem;
  padding: 1rem;
  max-height: 95vh;
  overflow: auto;

  fieldset {
    /* margin-top: 30px; */
  }

  p {
    font-size: 0.7rem;
    color: red;
  }

  .price {
    display: flex;
    flex-direction: column;
    & > fieldset + p {
      margin-top: 10px;
    }
  }

  .messageDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .announceTitle {
    font-family: "Seymour One", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.8125rem;
    margin-bottom: 20px;
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
    /* margin-top: 1.875rem; */
    margin-top: 30px;
  }

  select {
    width: 14.375rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0rem 0.375rem 0.75rem -0.125rem,
      rgba(0, 0, 0, 0.3) 0rem 0.1875rem 0.4375rem -0.1875rem;
    background-color: #fff;
    border-radius: 8px;
    border: none;
    overflow: hidden;
    height: 3rem;
    /* margin-bottom: 2.3125rem; */
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
    margin-top: 20px;
    justify-content: space-between;
    width: 100%;
  }

  textarea {
    width: 31rem;
    height: 12.0625rem;
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
    margin-top: 20px;

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
      /* margin-bottom: 10px; */
      padding: 0;
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
      /* margin-bottom: 14px; */
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
      /* margin-bottom: 3.375rem; */
    }
    .subtitle {
      display: none;
    }
    .divColl {
      gap: 3rem;
    }
    .colDiv {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 700px) {
    .nameMark {
      flex-direction: column;
      gap: 1.9375rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.9375rem;
      margin-top: 0rem;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
    }

    .colDiv {
      margin-top: 20px;
      position: relative;
      align-items: center;
      margin-bottom: 0;
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
      gap: 50px;
      width: 100%;
    }

    select {
      /* margin-bottom: 2.5rem; */
      width: 15.3125rem;
      padding: 0;
    }
    label {
      position: absolute;
      left: 0;
      top: -30px;
      margin-left: 0;
      margin-bottom: 0;
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
      /* margin-bottom: 1.1875rem; */
    }
    .announceTitle {
      font-size: 18px;
      line-height: 22px;
      /* margin-bottom: 3.375rem; */
      margin-bottom: 40px;
    }
    .subtitle {
      display: none;
    }
    .divColl {
      gap: 0rem;
    }
    .messageDiv {
      justify-content: center;
      width: 100%;
      align-items: center;
      margin-bottom: 20px;
    }
    .price {
      margin-bottom: 50px;
      width: 100%;
      & > fieldset + p {
        text-align: center;
      }
    }
  }

  @media (max-width: 540px) {
    padding: 0;
    fieldset {
      height: 30px;
    }
    .messageDiv {
      gap: 3px;
      margin-bottom: 0;
    }
    select {
      width: 100%;

      padding: 0;
      height: 30px;
    }
    .categoryPrice {
      width: 100%;

      gap: 0px;
    }

    .announceTitle {
      font-size: 15px;
      line-height: 17px;
    }
    textarea {
      width: 100%;
      height: 5.4375rem;
      /* margin-bottom: 1.1875rem; */
    }
    button {
      width: 100%;
      height: 2rem;

      font-weight: 400;
      font-size: 11px;
      line-height: 19px;
      margin-top: 0;
    }
    input {
      width: 100%;
    }
    fieldset {
      width: 100%;
    }
    form {
      width: 100%;
    }
    .nameMark {
      width: 100%;
      gap: 30px;
    }
    .colDiv {
      width: 100%;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .nameCategoryPriceDiv {
      width: 100%;
    }
    .price {
      width: 100%;
    }
  }

  @media (max-width: 280px) {
    button {
      font-size: 10px;
    }
  }
`;
