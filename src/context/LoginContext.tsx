import { createContext, useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import { api } from "../request/api";
import { RegisterContext } from "./RegisterContext";

export interface iModalProps {
  children: React.ReactNode;
}

export interface iLoginContext {
  openLogin: () => void;
  closeLogin: () => void;
  submitLogin: (data: iDataLogin) => Promise<void>;
  loginOpen: boolean;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export const LoginContext = createContext({} as iLoginContext);

export function LoginProvider({ children }: iModalProps) {
  const { closeRegister } = useContext(RegisterContext);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  function openLogin() {
    setLoginOpen(true);
    closeRegister();
  }

  function closeLogin() {
    setLoginOpen(false);
  }

  async function submitLogin(data: iDataLogin) {
    try {
      const request = await api.post("login", data);

      const response = request.data;

      const { accessToken, user } = response;

      localStorage.setItem("@TOKEN: WeeToys", accessToken);
      localStorage.setItem("@USER: WeeToys", user);

      toast("login bem sucedido");
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
          openLogin,
          closeLogin,
          loginOpen,
          submitLogin,
        }}
      >
        {children}
      </LoginContext.Provider>

      <Outlet />
    </>
  );
}
