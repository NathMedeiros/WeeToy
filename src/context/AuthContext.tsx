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
  modalEditProduct: boolean;
  openEditProduct: () => void;
  closeEditProduct: () => void;
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
  const [modalEditProduct, setModalEditProduct] = useState<boolean>(false)

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

  function openEditProduct() {
    setModalEditProduct(true)
  }

  function closeEditProduct() {
    setModalEditProduct(false)
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
          modalEditProduct,
          openEditProduct,
          closeEditProduct
        }}
      >
        {children}
      </ModalContext.Provider>

      <Outlet />
    </>
  );
}
