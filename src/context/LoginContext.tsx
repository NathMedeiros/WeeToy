import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";
import { toastDesign } from "../styles/toastPromise";
import { AuthContext } from "./AuthContext";
import { CartContext } from "./CartContext";
import { RegisterContext } from "./RegisterContext";

export interface iModalProps {
  children: React.ReactNode;
}

export interface iLoginContext {
  submitLogin: (data: iDataLogin) => Promise<void>;
  loadingLogin: boolean;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export const LoginContext = createContext({} as iLoginContext);

export function LoginProvider({ children }: iModalProps) {
  const { setLogged } = useContext(AuthContext);
  const { closeLogin } = useContext(RegisterContext);
  const {updateCartWithLogin} = useContext(CartContext)

  const [loadingLogin, setLoadingLogin] = useState<boolean>(false)

  async function submitLogin(data: iDataLogin) {
    setLoadingLogin(true)

    try {
      
      const request = await toast.promise(api.post("login", data), {
        loading: "Logando...",
        success: "Login bem sucedido!",
        error: "Falha no login. Tente novamente!"
      }, toastDesign)

      const response = request.data;

      const { accessToken, user } = response;

      const userJson = JSON.stringify(user);

      localStorage.setItem("@TOKEN: WeeToys", accessToken);
      localStorage.setItem("@USER: WeeToys", userJson);

      setLogged(true);
      updateCartWithLogin(user.id)
      setTimeout(closeLogin, 2500);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingLogin(false)
    }
  }

  return (
    <>
      <LoginContext.Provider
        value={{
          submitLogin,
          loadingLogin
        }}
      >
        {children}
      </LoginContext.Provider>

      <Outlet />
    </>
  );
}
