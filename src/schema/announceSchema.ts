import * as yup from "yup";

export const announceSchema = yup.object().shape({
  category: yup.string().required("Escolha uma categoria"),
  description: yup.string().required("Descreva o produto"),
  img: yup
    .string()
    .url("Precisa ser um link de imagem")
    .required("Adicione uma imagem"),
  marks: yup.string().optional(),
  price: yup
    .number()
    .typeError("Coloque um preço")
    .min(1, "Adicione um valor maior que zero"),
  toy_name: yup.string().required("Coloque um nome"),
});
