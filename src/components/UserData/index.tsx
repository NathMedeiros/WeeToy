import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { iFormRegister } from "../../interfaces";
import { userDataSchema } from "../../pages/UserPage/userDataSchema";
import { Button } from "../Button";
import { Header } from "../Header";
import { Input } from "../Input";
import { StyledUserData } from "./style";

export function UserData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    mode: "onSubmit",
    resolver: yupResolver(userDataSchema),
  });

  function patchUser(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    console.log(event);
  }

  return (
    <StyledUserData>
      <form noValidate onSubmit={() => console.log("oi")}>
        <Input
          id="name"
          placeholder="Digite seu nome"
          labelName="Nome"
          required={true}
          inputType="text"
          register={register("name")}
          width="100%"
        />
        {errors && <span>{errors.name?.message}</span>}
        <Input
          id="adress"
          placeholder="Digite seu email"
          labelName="Endereço"
          required={true}
          inputType="email"
          register={register("adress")}
          width="100%"
        />
        {errors && <span>{errors.email?.message}</span>}
        <Input
          id="cep"
          placeholder="Digite seu cep"
          labelName="CEP"
          required={true}
          inputType="text"
          register={register("cep")}
          width="100%"
        />
        {errors && <span>{errors.cep?.message}</span>}
        <Input
          id="email"
          placeholder="Digite seu email"
          labelName="Email"
          required={true}
          inputType="text"
          register={register("email")}
          width="100%"
        />
        {errors && <span>{errors.email?.message}</span>}
        <Input
          id="date"
          placeholder="data"
          labelName="Data de Nasicmento"
          required={true}
          inputType="date"
          register={register("dateOfBirth")}
          width="100%"
        />
        {errors && <span>{errors.email?.message}</span>}

        <Button
          // onClick={patchUser}
          padding="small"
          fontSize="12px"
          width="100%"
          styleButton="style3"
        >
          Atualizar dados
        </Button>
      </form>
    </StyledUserData>
  );
}
