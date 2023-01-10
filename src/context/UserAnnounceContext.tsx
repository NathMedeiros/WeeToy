import { createContext, useState } from "react";
import { ReactNode } from "react";
import { iCardMyProductProps } from "../interfaces";
import { api } from "../request/api";

interface iUserAnnounceProps {
  children: React.ReactNode;
}

interface iUserAnnounceContext {
  loadUser: iCardMyProductProps[] | undefined;
  loadAnnounces: () => void;
}

export const UserAnnounceContext = createContext({} as iUserAnnounceContext);

export function UserAnnounceProvider({ children }: iUserAnnounceProps) {
  const [loadUser, setLoadUser] = useState<iCardMyProductProps[]>();

  async function loadAnnounces() {
    const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
    const token = localStorage.getItem("@TOKEN: WeeToys");
    try {
      const request = await api.get(`/users/${user.id}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      console.log(request.data.toy);
      setLoadUser(request.data.toy);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(loadUser);
  return (
    <UserAnnounceContext.Provider value={{ loadUser, loadAnnounces }}>
      {children}
    </UserAnnounceContext.Provider>
  );
}
