import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;

  .img-aside {
    width: 300px;
    height: 350px;
    object-fit: contain;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 250px;
  }

  .form-section > img {
    width: 200px;
    height: 50px;
  }

  .form-section span {
    position: absolute;
    right: 30px;
    top: 20px;
    color: #fc4a1a;
    font-weight: 700;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  form > button {
    margin-top: 20px;
    height: 32px;
    border-radius: 0.5rem;
    border: solid 1px #fc4a1a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fc4a1a;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .form-section > button {
    height: 32px;
    border-radius: 0.5rem;
    border: solid 1px #f7b733;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #f7b733;
    font-weight: 600;
    font-size: 0.85rem;
  }

  p {
    color: red;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    width: 95%;

    .img-aside {
      display: none;
    }
  }
`;

export const modalPosition = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
