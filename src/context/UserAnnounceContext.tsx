import { createContext, useState } from "react";
import { iEditProductModal } from "../interfaces";
import { api } from "../request/api";

interface iUserAnnounceProps {
  children: React.ReactNode;
}

interface iUserAnnounceContext {
  loadUser: iEditProductModal[] | undefined;
  loadAnnounces: () => Promise<void>;
}

export const UserAnnounceContext = createContext({} as iUserAnnounceContext);

export function UserAnnounceProvider({ children }: iUserAnnounceProps) {
  const [loadUser, setLoadUser] = useState<iEditProductModal[]>();

  async function loadAnnounces() {
    const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
    const token = localStorage.getItem("@TOKEN: WeeToys");
    try {
      const request = await api.get(`/users/${user.id}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      setLoadUser(request.data.toy);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserAnnounceContext.Provider value={{ loadUser, loadAnnounces }}>
      {children}
    </UserAnnounceContext.Provider>
  );
}
