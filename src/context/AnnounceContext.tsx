import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./../request/api";
import { toast } from "react-hot-toast";

export interface iModalAnnounceProps {
  children: React.ReactNode;
}

export interface iModalAnnounceContext {
  openModal: () => void;
  closeModal: () => void;
  submitAnnounce: (data: IDataNewAnnounce) => Promise<void>;
  isOpen: boolean;
}

export interface IDataNewAnnounce {
  img: string;
  marks: string;
  toy_name: string;
  category: string;
  price: number;
  description: string;
  userId: string;
}

export const ModalAnnounceContext = createContext({} as iModalAnnounceContext);

export function ModalAnnounceProvider({ children }: iModalAnnounceProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function submitAnnounce(data: IDataNewAnnounce) {
    const token = localStorage.getItem("@TOKEN: WeeToys");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const request = await api.post("/toys", data);
        toast.success("Brinquedo anunciado com sucesso!", {
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
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } catch (error) {
        toast.error(`Ocorreu algum erro. Tente novamente!`, {
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
      <ModalAnnounceContext.Provider
        value={{ openModal, closeModal, isOpen, submitAnnounce }}
      >
        {children}
      </ModalAnnounceContext.Provider>
      <Outlet />
    </>
  );
}
