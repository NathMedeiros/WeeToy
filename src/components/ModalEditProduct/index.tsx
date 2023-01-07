import { Input } from "../Input";
import { ModalEditProductStyle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editProductSchema } from "../../schema/editProductSchema";
import { iEditProductModal } from "../../interfaces";
import { Button } from "../Button";

export function ModalEditProduct(){

    const { register, handleSubmit } = useForm<iEditProductModal>({
        resolver: yupResolver(editProductSchema)
    })

    return (
        <ModalEditProductStyle>
            <h2>Atualizar informações do produto.</h2>
            <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
                <div>
                    <div>
                        <Input labelName="Foto do brinquedo" id="toysImage" inputType="url" required={true} placeholder="" width="50%" register={register("img")} />
                        <Input labelName="Nome" id="toyName" inputType="text" required={true} placeholder="" width="50%" register={register("toy_name")} />
                        <div>
                            <fieldset>
                                <label htmlFor="toyCategory">Categoria</label>
                                <select id="toyCategory" required={true} {...register("category")} >
                                    <option value="">Selecione</option>
                                </select>
                            </fieldset>
                            <Input labelName="Preço" id="toyPrice" inputType="number" required={true} placeholder="R$" width="50%" register={register("price")} />
                        </div>
                    </div>
                    <div>
                        <Input labelName="Marca (opcional)" id="toyMarks" inputType="text" required={true} placeholder="" width="50%" register={register("marks")} />
                        <fieldset>
                            <label htmlFor="toyDescription">Descrição</label>
                            <textarea id="toyDescription" required={true} {...register("description")}>
                                
                            </textarea>
                        </fieldset>
                    </div>
                </div>
                <Button styleButton="style3">Editar produto</Button>
            </form>
        </ModalEditProductStyle>
    )
} 