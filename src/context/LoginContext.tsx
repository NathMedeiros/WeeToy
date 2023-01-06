import { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";
import { AuthContext } from "./AuthContext";

export interface iModalProps {
  children: React.ReactNode;
}

export interface iLoginContext {
  submitLogin: (data: iDataLogin) => Promise<void>;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export const LoginContext = createContext({} as iLoginContext);

export function LoginProvider({ children }: iModalProps) {
  const { setLogged } = useContext(AuthContext);

  async function submitLogin(data: iDataLogin) {
    try {
      const request = await api.post("login", data);

      const response = request.data;

      const { accessToken, user } = response;

      const userJson = JSON.stringify(user);

      localStorage.setItem("@TOKEN: WeeToys", accessToken);
      localStorage.setItem("@USER: WeeToys", userJson);

      toast("login bem sucedido");
      setLogged(true);
    } catch (error) {
      toast.error(`Falha no login. Tente novamente!`, {
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
    }
  }

  return (
    <>
      <LoginContext.Provider
        value={{
          submitLogin,
        }}
      >
        {children}
      </LoginContext.Provider>

      <Outlet />
    </>
  );
}
