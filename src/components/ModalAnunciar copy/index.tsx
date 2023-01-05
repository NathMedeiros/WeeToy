import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalAnnounceContext } from "../../context/ModalAnnounceContext";
import { ModalContext } from "../../context/ModalContext";
import { Div } from "../Modal/modal";
import { BackGround } from "./styles";

export function Announce() {
  const { register, handleSubmit } = useForm();
  const { closeModal } = useContext(ModalAnnounceContext);

  return (
    <BackGround>
      <Div>
        <p>Anuncie seu produto, é fácil e rápido</p>
        <p>capriche na foto e na descrição do seu produto</p>
        <form action=""></form>
      </Div>
    </BackGround>
  );
}
