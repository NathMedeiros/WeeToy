import { createContext, useState } from "react";

import { iModalProps } from "./LoginContext";

export interface iCardContext {
  cardOpen: number | null;
  setCardOpen: React.Dispatch<React.SetStateAction<number | null>>;
  modalDescription: (id: number) => void;
}

export const CardModalContext = createContext({} as iCardContext);

export function CardProvider({ children }: iModalProps) {
  const [cardOpen, setCardOpen] = useState<number | null>(null);

  const modalDescription = (id: number) => {
    if (!cardOpen) {
      setCardOpen(id);
    } else {
      setCardOpen(null);
    }
  };

  return (
    <>
      <CardModalContext.Provider
        value={{
          cardOpen,
          modalDescription,
          setCardOpen,
        }}
      >
        {children}
      </CardModalContext.Provider>
    </>
  );
}
