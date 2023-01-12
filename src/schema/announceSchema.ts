import * as yup from "yup";

export const announceSchema = yup.object().shape({
  category: yup.string().required("Escolha uma categoria"),
  description: yup.string().required("Descreva o produto"),
  img: yup
    .string()
    .url("Precisa ser um link de imagem")
    .required("Adicione uma imagem"),
  marks: yup.string().optional(),
  price: yup.number().required("Coloque um preço"),
  toy_name: yup.string().required("Coloque um nome"),
});
