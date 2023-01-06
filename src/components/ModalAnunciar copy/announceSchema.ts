import * as yup from "yup";

export const announceSchema = yup.object().shape({
  img: yup.string().required("Insira uma imagem"),
  toy_name: yup.string().required("Insira um nome"),
  price: yup.number().required("Insira um preço"),
  category: yup.string().required("Escolha uma categoria"),
});
