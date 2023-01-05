import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { iUserPage } from "../../interfaces";
import { StyledUserPage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userDataSchema } from "./userDataSchema";
import { Button } from "../../components/Button";

export function UserPage({ children }: iUserPage) {
  const [pageToRender, setPageToRender] = useState("userData" as String);

  function changePage() {
    pageToRender === "userData"
      ? setPageToRender("History")
      : setPageToRender("userData");
  }

  function patchUser(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(event);
  }

  interface iFormRegister {
    name: string;
    adress: string;
    cep: number;
    email: string;
    dayOfBirth: number;
    monthOfBirth: number;
    yearOfBirth: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    mode: "onSubmit",
    resolver: yupResolver(userDataSchema),
  });

  return (
    <StyledUserPage>
      <Header />
      <nav>
        <button className="selected">Meus Dados</button>
        <button>Histórico</button>
        <button>Anúncios</button>
      </nav>

      <form noValidate>
        <Input
          id="name"
          placeholder="Digite seu nome"
          labelName="Nome"
          required={true}
          inputType="text"
          {...register("name")}
          width="100%"
        />
        {errors && <span>{errors.name?.message}</span>}
        <Input
          id="adress"
          placeholder="Digite seu email"
          labelName="Endereço"
          required={true}
          inputType="email"
          {...register("adress")}
          width="100%"
        />
        {errors && <span>{errors.email?.message}</span>}
        <Input
          id="cep"
          placeholder="Digite seu cep"
          labelName="CEP"
          required={true}
          inputType="text"
          {...register("cep")}
          width="100%"
        />
        {errors && <span>{errors.cep?.message}</span>}
        <Input
          id="email"
          placeholder="Digite seu email"
          labelName="Email"
          required={true}
          inputType="text"
          {...register("email")}
          width="100%"
        />
        {errors && <span>{errors.email?.message}</span>}
        <label htmlFor="">Data de Nasicmento</label>
        <div>
          <Input
            id="day"
            placeholder="dia"
            labelName=""
            required={true}
            inputType="number"
            {...register("dayOfBirth")}
            width="25%"
          />
          {errors && <span>{errors.email?.message}</span>}
          <Input
            id="month"
            placeholder="mês"
            labelName=""
            required={true}
            inputType="number"
            {...register("monthOfBirth")}
            width="35%"
          />
          {errors && <span>{errors.email?.message}</span>}
          <Input
            id="year"
            placeholder="ano"
            labelName=""
            required={true}
            inputType="number"
            {...register("yearOfBirth")}
            width="35%"
          />
          {errors && <span>{errors.email?.message}</span>}
        </div>
        <Button
          onClick={patchUser}
          padding="small"
          fontSize="12px"
          width="100%"
          styleButton="style3"
        >
          Atualizar dados
        </Button>
      </form>
    </StyledUserPage>
  );
}
