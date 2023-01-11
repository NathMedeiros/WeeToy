import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";
import { toastDesign } from "../styles/toastPromise";
import { UserAnnounceContext } from "./UserAnnounceContext";

interface iModalDeleteProps {
  children: ReactNode;
}

interface iModalDeleteContext {
  isOpen: boolean;
  openDelete: () => void;
  closeDelete: () => void;
  deleteNow: () => void;
}

export const ModalDeleteContext = createContext({} as iModalDeleteContext);

export function ModalDeleteProvider({ children }: iModalDeleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { loadAnnounces } = useContext(UserAnnounceContext);

  function openDelete() {
    setIsOpen(true);
  }

  function closeDelete() {
    setIsOpen(false);
  }

  async function deleteNow() {
    
    const productId = localStorage.getItem("@ProductID: WeeToys");
    const token = localStorage.getItem("@TOKEN: WeeToys");

    if (productId) {
      const id = JSON.parse(productId);
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        
        const request = await toast.promise(api.delete(`toys/${id}`), {
          loading: "Removendo anúncio...",
          error: "Falha ao remover anúncio. Tente novamente!",
          success: "Anúncio removido com sucesso!"
        }, toastDesign)
        loadAnnounces();
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      } 
    }

  }
  return (
    <>
      <ModalDeleteContext.Provider
        value={{ isOpen, openDelete, closeDelete, deleteNow }}
      >
        {children}
      </ModalDeleteContext.Provider>
      <Outlet />
    </>
  );
}
