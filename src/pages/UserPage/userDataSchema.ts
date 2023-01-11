import * as yup from "yup";

export const userDataSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  cep: yup
    .string()
    .matches(/^[0-9]{5}-[0-9]{3}$/)
    .required(),
  email: yup.string().email().required(),
  birth_date: yup.date().required(),
});
