import { useContext } from "react";
import { useForm } from "react-hook-form";
import child from "../../assets/child.png";
import login from "../../assets/logoLogin.png";
import logoRegister from "../../assets/logoRegister.png";
import { ModalContext } from "../../context/ModalContext";
import { Input } from "../Input";
import { Div } from "./modal";

export function Login() {
  const { register, handleSubmit } = useForm();
  const { closeModal } = useContext(ModalContext);

  return (
    <Div>
      <img
        src={child}
        alt="imagem de criança brincando"
        className="img-aside"
      />
      <section className="form-section">
        <img src={login} alt="logo do login" />
        <span onClick={closeModal}>x</span>
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
          <Input
            id="password"
            placeholder=""
            labelName="Senha"
            required={true}
            inputType="password"
            width="100%"
            {...register("password")}
          />
          <button type="submit">Entrar</button>
        </form>
        <button type="button">Cadastre-se</button>
      </section>
    </Div>
  );
}

export function Register() {
  const { register, handleSubmit } = useForm();
  const { closeModal } = useContext(ModalContext);

  return (
    <Div>
      <img
        src={child}
        alt="imagem de criança brincando"
        className="img-aside"
      />
      <section className="form-section">
        <img src={logoRegister} alt="logo do cadastro" />
        <span onClick={closeModal}>x</span>
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
          <Input
            id="email"
            placeholder=""
            labelName="Email"
            required={true}
            inputType="text"
            width="100%"
            {...register("email")}
          />
          <Input
            id="password"
            placeholder=""
            labelName="Senha"
            required={true}
            inputType="password"
            width="100%"
            {...register("password")}
          />
          <Input
            id="confirm-password"
            placeholder=""
            labelName="Confirmar senha"
            required={true}
            inputType="password"
            width="100%"
            {...register("confirm-password")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </Div>
  );
}
