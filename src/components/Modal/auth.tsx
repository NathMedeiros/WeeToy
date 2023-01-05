import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import child from "../../assets/child.png";
import login from "../../assets/logoLogin.png";
import logoRegister from "../../assets/logoRegister.png";
import { ModalContext } from "../../context/AuthContext";
import { registerSchema } from "../../schema/registerSchema";
import { Input } from "../Input";
import { Div } from "./modal";
import { loginSchema } from "../../schema/loginSchema";
import { iFormModal } from "../../interfaces";

export function Login() {
  const { closeLogin } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormModal>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <Div>
      <img
        src={child}
        alt="imagem de criança brincando"
        className="img-aside"
      />
      <section className="form-section">
        <img src={login} alt="logo do login" />
        <span onClick={closeLogin}>x</span>
        <form>
          <Input
            id="email"
            placeholder=""
            labelName="Email"
            required={true}
            inputType="text"
            width="100%"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <Input
            id="password"
            placeholder=""
            labelName="Senha"
            required={true}
            inputType="password"
            width="100%"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Entrar</button>
        </form>
        <button type="button">Cadastre-se</button>
      </section>
    </Div>
  );
}

export function Register() {
  const { closeRegister } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormModal>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <Div>
      <img
        src={child}
        alt="imagem de criança brincando"
        className="img-aside"
      />
      <section className="form-section">
        <img src={logoRegister} alt="logo do cadastro" />
        <span onClick={closeRegister}>x</span>
        <form>
          <Input
            id="name"
            placeholder=""
            labelName="Nome"
            required={true}
            inputType="text"
            width="100%"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <Input
            id="email"
            placeholder=""
            labelName="Email"
            required={true}
            inputType="text"
            width="100%"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <Input
            id="password"
            placeholder=""
            labelName="Senha"
            required={true}
            inputType="password"
            width="100%"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <Input
            id="confirmPass"
            placeholder=""
            labelName="Confirmar senha"
            required={true}
            inputType="password"
            width="100%"
            {...register("confirmPass")}
          />
          <p>{errors.confirmPass?.message}</p>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </Div>
  );
}
