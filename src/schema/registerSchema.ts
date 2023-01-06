import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .min(8, "É necessário uma senha de pelos 8 caracteres"),
  name: yup.string().required("Nome obrigatório"),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Repita a senha"),
});
