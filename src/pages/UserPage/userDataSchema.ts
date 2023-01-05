import * as yup from "yup";

export const userDataSchema = yup.object().shape({
  name: yup.string(),
  adress: yup.string(),
  cep: yup.string().matches(/^[0-9]{5}-[0-9]{3}$/),
  email: yup.string().email(),
});
