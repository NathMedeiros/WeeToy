import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { iFormRegister } from "../../interfaces";
import { userDataSchema } from "../../pages/UserPage/userDataSchema";
import { api } from "../../request/api";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledUserData } from "./style";

export function UserData() {
  const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
  const token = localStorage.getItem("@TOKEN: WeeToys");
  const [userData, setUserData] = useState({} as iFormRegister);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUserData() {
      try {
        const request = await api.get(`/users/${user.id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        const { address, birth_date, cep, email, name } = request.data;
        setUserData({ address, birth_date, cep, email, name });
        console.log(address, birth_date);
        setValue(address, address);
        setValue(birth_date, birth_date);
        setValue(cep, cep);
        setValue(email, email);
        setValue(name, name);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }
    loadUserData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iFormRegister>({
    mode: "onSubmit",
    resolver: yupResolver(userDataSchema),
    defaultValues: {
      address: userData.address,
      birth_date: userData.birth_date,
      cep: userData.cep,
      email: userData.email,
      name: userData.name,
    },
  });

  async function patchUser(data: iFormRegister) {
    console.log(data);
    try {
      const request = await api.patch(`/users/${user.id}`, data, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Dados de usuário atualizados!");
      console.log(request);
    } catch (error) {
      console.log(error);
      toast.error(`Falha no login. Tente novamente!`, {
        style: {
          border: "1px solid #EB5757",
          padding: "16px",
          color: "#EB5757",
          background: "#F5F5F5",
        },
        iconTheme: {
          primary: "#EB5757",
          secondary: "#F5F5F5",
        },
      });
    }
  }

  return (
    <StyledUserData>
      <form noValidate onSubmit={handleSubmit(patchUser)}>
        <Input
          id="name"
          placeholder="Digite seu nome"
          labelName="Nome"
          required={true}
          inputType="text"
          register={register("name")}
          width="100%"
          value={userData.name}
        />
        {errors && <span>{errors.name?.message}</span>}
        <Input
          id="address"
          placeholder="Digite seu email"
          labelName="Endereço"
          required={true}
          inputType="email"
          register={register("address")}
          width="100%"
          value={userData.address}
        />
        {errors && <span>{errors.address?.message}</span>}
        <Input
          id="cep"
          placeholder="Digite seu cep"
          labelName="CEP"
          required={true}
          inputType="text"
          register={register("cep")}
          width="100%"
          value={userData.cep}
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
          value={userData.email}
        />
        {errors && <span>{errors.email?.message}</span>}
        <Input
          id="date"
          placeholder="data"
          labelName="Data de Nasicmento"
          required={true}
          inputType="date"
          register={register("birth_date")}
          width="100%"
          value={userData.birth_date}
        />
        {errors && <span>{errors.birth_date?.message}</span>}

        <Button
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
