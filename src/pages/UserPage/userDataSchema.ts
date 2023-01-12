import * as yup from "yup";

export const userDataSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  address: yup.string().required("Endereço obrigatório!"),
  cep: yup
    .string()
    .matches(/^[0-9]{5}-[0-9]{3}$/, "CEP inválido!")
    .required("CEP obrigatório!"),
  email: yup.string().email().required(),
  birth_date: yup.string().required("Data de nascimento obrigatória!"),
});
