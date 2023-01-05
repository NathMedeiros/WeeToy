import { createContext, useState } from "react";

export interface iModalProps {
  children: React.ReactNode;
}

export interface iModalContext {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

export const ModalContext = createContext({} as iModalContext);

export function ModalProvider({ children }: iModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
