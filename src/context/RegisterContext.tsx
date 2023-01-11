import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";
import { toastDesign } from "../styles/toastPromise";
import { iModalProps, iDataLogin } from "./LoginContext";

export interface iRegisterContext {
  openRegister: () => void;
  closeRegister: () => void;
  openLogin: () => void;
  closeLogin: () => void;
  submitRegister: (data: iDataLogin) => Promise<void>;
  registerOpen: boolean;
  loginOpen: boolean;
}

export interface iDataRegister {
  email: string;
  password: string;
  name?: string;
  confirmPass?: string;
}

export const RegisterContext = createContext({} as iRegisterContext);

export function RegisterProvider({ children }: iModalProps) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  function openRegister() {
    setRegisterOpen(true);
    closeLogin();
  }

  function closeRegister() {
    setRegisterOpen(false);
  }

  function openLogin() {
    setLoginOpen(true);
    closeRegister();
  }

  function closeLogin() {
    setLoginOpen(false);
  }

  async function submitRegister(data: iDataRegister) {
    
    try {
      const request = await toast.promise(api.post("/register", data), {
        loading: "Registrando...",
        error: "Falha no registro. Tente novamente!",
        success: "Cadastro realizado com sucesso!"
      }, toastDesign)

      if (request.status === 201) {
        openLogin();
      }
    } catch (error) {
      console.error(error);
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
          loginOpen,
          openLogin,
          closeLogin,
        }}
      >
        {children}
      </RegisterContext.Provider>

      <Outlet />
    </>
  );
}
