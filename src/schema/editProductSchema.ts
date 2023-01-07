import * as yup from "yup";

export const editProductSchema = yup.object().shape({
    category: yup.string().required("Você precisa colocar uma categoria"),
    description: yup.string().required("Você precisa colocar uma descrição"),
    img: yup.string().required("Você precisa adicionar uma imagem"),
    marks: yup.string().optional(),
    price: yup.number().required("Você precisa colocar um preço"),
    toy_name: yup.string().required("Você precisa colocar um nome para o brinquedo")
})