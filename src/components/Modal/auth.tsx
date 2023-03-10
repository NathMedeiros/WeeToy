import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster } from "react-hot-toast";
import child from "../../assets/child.png";
import login from "../../assets/logoLogin.png";
import logoRegister from "../../assets/logoRegister.png";
import { motion } from "framer-motion";
import { iDataLogin, LoginContext } from "../../context/LoginContext";
import { registerSchema } from "../../schema/registerSchema";
import { Input } from "../Input";
import { Div } from "./modal";
import { loginSchema } from "../../schema/loginSchema";
import { iFormModal } from "../../interfaces";
import { RegisterContext } from "../../context/RegisterContext";

export function Login() {
  const { submitLogin, loadingLogin } = useContext(LoginContext);
  const { openRegister, closeLogin } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Div>
        <Toaster />
        <img
          src={child}
          alt="imagem de criança brincando"
          className="img-aside"
        />
        <section className="form-section">
          <img src={login} alt="logo do login" />
          <span onClick={closeLogin}>x</span>
          <form onSubmit={handleSubmit(submitLogin)} noValidate>
            <Input
              id="email-login"
              placeholder=""
              labelName="Email"
              required={true}
              inputType="text"
              width="100%"
              register={register("email")}
            />
            <p>{errors.email?.message}</p>

            <Input
              id="password-login"
              placeholder=""
              labelName="Senha"
              required={true}
              inputType="password"
              width="100%"
              register={register("password")}
            />
            <p>{errors.password?.message}</p>

            <button type="submit" disabled={loadingLogin}>
              {loadingLogin ? "Entrando..." : "Entrar"}
            </button>
          </form>
          <button type="button" onClick={openRegister}>
            Cadastre-se
          </button>
        </section>
      </Div>
    </motion.div>
  );
}

export function Register() {
  const { closeRegister, submitRegister, loadingRegister } =
    useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormModal>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Div>
        <Toaster />
        <img
          src={child}
          alt="imagem de criança brincando"
          className="img-aside"
        />
        <section className="form-section">
          <img src={logoRegister} alt="logo do cadastro" />
          <span onClick={closeRegister}>x</span>
          <form onSubmit={handleSubmit(submitRegister)} noValidate>
            <Input
              id="name"
              placeholder=""
              labelName="Nome"
              required={true}
              inputType="text"
              width="100%"
              register={register("name")}
            />
            <p>{errors.name?.message}</p>

            <Input
              id="email-register"
              placeholder=""
              labelName="Email"
              required={true}
              inputType="text"
              width="100%"
              register={register("email")}
            />
            <p>{errors.email?.message}</p>

            <Input
              id="password-register"
              placeholder=""
              labelName="Senha"
              required={true}
              inputType="password"
              width="100%"
              register={register("password")}
            />
            <p>{errors.password?.message}</p>

            <Input
              id="confirmPass"
              placeholder=""
              labelName="Confirmar senha"
              required={true}
              inputType="password"
              width="100%"
              register={register("confirmPass")}
            />
            <p>{errors.confirmPass?.message}</p>

            <button type="submit" disabled={loadingRegister}>
              {loadingRegister ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </section>
      </Div>
    </motion.div>
  );
}
