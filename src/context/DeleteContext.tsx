import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";
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
        const request = await api.delete(`toys/${id}`);
        console.log("deletado");
        loadAnnounces();
        setIsOpen(false);
        toast.success("Anúncio removido com sucesso!", {
          style: {
            border: "1px solid #15da4d",
            padding: "16px",
            color: "#15da4d",
            background: "#F5F5F5",
          },
          iconTheme: {
            primary: "#15da4d",
            secondary: "#F5F5F5",
          },
        });
      } catch (error) {
        toast.error(`Falha ao remover anúncio. Tente novamente!`, {
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
