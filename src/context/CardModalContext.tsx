import { createContext, useState } from "react";

import { iModalProps } from "./LoginContext";

export interface iCardContext {
  openCard: () => void;
  closeCard: () => void;
  cardOpen: boolean;
}

export const CardModalContext = createContext({} as iCardContext);

export function CardProvider({ children }: iModalProps) {
  const [cardOpen, setCardOpen] = useState(false);

  function openCard() {
    setCardOpen(true);
  }

  function closeCard() {
    setCardOpen(false);
  }

  return (
    <>
      <CardModalContext.Provider
        value={{
          cardOpen,
          openCard,
          closeCard,
        }}
      >
        {children}
      </CardModalContext.Provider>
    </>
  );
}
