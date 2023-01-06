import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export interface iModalProps {
  children: React.ReactNode;
}

export interface iModalContext {
  openRegister: () => void;
  closeRegister: () => void;
  openLogin: () => void;
  closeLogin: () => void;
  registerOpen: boolean;
  loginOpen: boolean;
  hiddenSearch: () => void;
  hidden: boolean;
}

export interface iData {
  email: string;
  password: string;
  name: string;
  confirmPass?: string;
}

export const ModalContext = createContext({} as iModalContext);

export function ModalProvider({ children }: iModalProps) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  function hiddenSearch() {
    if (hidden === true) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  function openRegister() {
    setRegisterOpen(true);
  }

  function closeRegister() {
    setRegisterOpen(false);
  }

  function openLogin() {
    setLoginOpen(true);
  }

  function closeLogin() {
    setLoginOpen(false);
  }

  return (
    <>
      <ModalContext.Provider
        value={{
          openRegister,
          closeRegister,
          registerOpen,
          openLogin,
          closeLogin,
          loginOpen,
          hiddenSearch,
          hidden,
        }}
      >
        {children}
      </ModalContext.Provider>

      <Outlet />
    </>
  );
}
