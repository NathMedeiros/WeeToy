import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export interface iModalAnnounceProps {
  children: React.ReactNode;
}

export interface iModalAnnounceContext {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
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
  console.log(isOpen);
  return (
    <>
      <ModalAnnounceContext.Provider value={{ openModal, closeModal, isOpen }}>
        {children}
      </ModalAnnounceContext.Provider>
      <Outlet />
    </>
  );
}
