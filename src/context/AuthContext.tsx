import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "./../request/api";

interface iAuthProps {
  children: React.ReactNode;
}

export interface iToys {
  category: string;
  description: string;
  id: number;
  img: string;
  marks: string;
  price: number;
  toy_name: string;
  userId: number;
}

interface iAuthContext {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  listToys: iToys[];
}

export const AuthContext = createContext({} as iAuthContext);

export function AuthProvider({ children }: iAuthProps) {
  const [logged, setLogged] = useState(false);

  const [isLogged, setIsLogged] = useState(false);

  const [listToys, setListToys] = useState([
    {
      category: "",
      description: "",
      id: 0,
      img: "",
      marks: "",
      price: 0,
      toy_name: "",
      userId: 0,
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN: WeeToys");

    const userIdLocal = localStorage.getItem("@USER: WeeToys");

    async function loadUser() {
      if (token && userIdLocal !== null) {
        const userId = await JSON.parse(userIdLocal);

        try {
          const request = await api.get(`/users/${userId.id}`, {
            headers: { authorization: `Bearer ${token}` },
          });

          if (request.data) {
            setIsLogged(true);
          }
        } catch (err) {
          localStorage.removeItem("@TOKEN: WeeToys");
          localStorage.removeItem("@USER: WeeToys");
          console.log(err);
          return null;
        }
      }
    }

    loadUser();

    async function getToysFromAPI() {
      try {
        const { data } = await api.get("/toys");

        const arrayToys: iToys[] = data.map((toy: iToys) => {
          return toy;
        });

        setListToys(arrayToys);
      } catch (err) {
        return null;
      }
    }

    getToysFromAPI();
  }, [logged]);

  return (
    <AuthContext.Provider value={{ setLogged, isLogged, listToys }}>
      {children}
    </AuthContext.Provider>
  );
}
