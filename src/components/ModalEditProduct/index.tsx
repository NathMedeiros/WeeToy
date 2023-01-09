import { Input } from "../Input";
import { ModalEditProductStyle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editProductSchema } from "../../schema/editProductSchema";
import { iEditProductModal } from "../../interfaces";
import { Button } from "../Button";
import { useContext } from "react"
import { EditProductContext } from "../../context/EditProductContext";

export function ModalEditProduct({ img, toy_name, category, price, marks, description, id }: iEditProductModal){

    const { editProductLoading, editProduct } = useContext(EditProductContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iEditProductModal>({
        resolver: yupResolver(editProductSchema)
    })

    return (
        <ModalEditProductStyle>
            <h2>Atualizar informações do produto.</h2>
            <form onSubmit={handleSubmit((data) => editProduct(data, id))} noValidate>
                <div>
                    <div>
                        <Input labelName="Foto do brinquedo" id="toysImage" inputType="url" required={true} placeholder="" width="100%" register={register("img")} />
                        {errors.img && <span>{errors.img.message}</span>}
                        <Input labelName="Nome" id="toyName" inputType="text" required={true} placeholder="" width="100%" register={register("toy_name")} />
                        {errors.toy_name && <span>{errors.toy_name.message}</span>}
                        <div>
                            <div>
                                <fieldset>
                                    <label htmlFor="toyCategory">Categoria</label>
                                    <select id="toyCategory" required={true} {...register("category")} >
                                        <option value="">Selecione</option>
                                        <option value="carrinho">Carrinho</option>
                                        <option value="quebraCabeça">Quebra-Cabeça</option>
                                    </select>
                                </fieldset>
                            {errors.category && <span>{errors.category.message}</span>}
                            </div>
                            <div>
                                <Input labelName="Preço" id="toyPrice" inputType="number" required={true} placeholder="R$" width="100%" register={register("price")} />
                                {errors.price && <span>{errors.price.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Input labelName="Marca (opcional)" id="toyMarks" inputType="text" required={true} placeholder="" width="100%" register={register("marks")} />
                        {errors.marks && <span>{errors.marks.message}</span>}
                        <fieldset>
                            <label htmlFor="toyDescription">Descrição</label>
                            <textarea id="toyDescription" required={true} {...register("description")}>
                                
                            </textarea>
                        </fieldset>
                        {errors.description && <span>{errors.description.message}</span>}
                    </div>
                </div>
                <Button styleButton="style3">
                    {editProductLoading ? "Editando..." : "Editar produto"}
                </Button>
            </form>
        </ModalEditProductStyle>
    )
} 