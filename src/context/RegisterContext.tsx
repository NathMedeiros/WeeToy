import { createContext, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";
import { iModalProps, iDataLogin, LoginContext } from "./LoginContext";

export interface iRegisterContext {
  openRegister: () => void;
  closeRegister: () => void;
  submitRegister: (data: iDataLogin) => Promise<void>;
  registerOpen: boolean;
}

export interface iDataRegister {
  email: string;
  password: string;
  name?: string;
  confirmPass?: string;
}

export const RegisterContext = createContext({} as iRegisterContext);

export function RegisterProvider({ children }: iModalProps) {
  const { closeLogin, openLogin } = useContext(LoginContext);
  const [registerOpen, setRegisterOpen] = useState(false);

  function openRegister() {
    setRegisterOpen(true);
    closeLogin();
  }

  function closeRegister() {
    setRegisterOpen(false);
  }

  async function submitRegister(data: iDataRegister) {
    console.log(data);
    try {
      const request = await api.post("/register", data);

      if (request.status === 201) {
        toast.success(`Cadastro realizado com sucesso`, {
          style: {
            border: "1px solid #27AE60",
            padding: "16px",
            color: "#27AE60",
            background: "#F5F5F5",
          },
          iconTheme: {
            primary: "#27AE60",
            secondary: "#F5F5F5",
          },
        });

        setTimeout(openLogin, 2500);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Falha no registro. Tente novamente!`, {
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
    <>
      <RegisterContext.Provider
        value={{
          openRegister,
          closeRegister,
          registerOpen,
          submitRegister,
        }}
      >
        {children}
      </RegisterContext.Provider>

      <Outlet />
    </>
  );
}
