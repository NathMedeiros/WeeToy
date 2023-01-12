import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { iFormRegister } from "../../interfaces";
import { userDataSchema } from "../../pages/UserPage/userDataSchema";
import { api } from "../../request/api";
import { toastDesign } from "../../styles/toastPromise";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledUserData } from "./style";

interface iUserData {
  userId: string;
  token: string;
  userData: iFormRegister;
}

export function UserData({ userData, userId, token }: iUserData) {
  useEffect(() => {
    function updateForm() {
      setValue("name", userData.name);
      setValue("email", userData.email);
      setValue("address", userData.address);
      setValue("cep", userData.cep);
      setValue("birth_date", userData.birth_date);
    }
    updateForm();
  }, [userData]);

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

  const [loadingData, setLoadingData] = useState<boolean>(false);

  async function patchUser(data: iFormRegister) {
    setLoadingData(true);
    try {
      const request = await toast.promise(
        api.patch(`/users/${userId}`, data, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }),
        {
          success: "Dados de usuário atualizados!",
          error: "Falha no login. Tente novamente!",
          loading: "Atualizando dados...",
        },
        toastDesign
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingData(false);
    }
  }

  return (
    <StyledUserData>
      <Toaster />
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
          id="email"
          placeholder="Digite seu email"
          labelName="Email"
          required={true}
          inputType="text"
          register={register("email")}
          readOnly={true}
          width="100%"
          value={userData.email}
        />
        {errors && <span>{errors.email?.message}</span>}
        <Input
          id="address"
          placeholder="Digite seu enderço"
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
          disabled={loadingData}
        >
          {loadingData ? "Atualizando dados..." : "Atualizar dados"}
        </Button>
      </form>
    </StyledUserData>
  );
}
