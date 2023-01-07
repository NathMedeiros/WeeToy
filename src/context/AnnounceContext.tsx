import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "./../request/api";

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
      } catch (error) {
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
