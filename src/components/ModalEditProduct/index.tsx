import { Input } from "../Input";
import { ModalEditProductStyle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editProductSchema } from "../../schema/editProductSchema";
import { iEditProductModal } from "../../interfaces";
import { Button } from "../Button";
import { useContext } from "react";
import { EditProductContext } from "../../context/EditProductContext";
import { motion } from "framer-motion";

export function ModalEditProduct({
  img,
  toy_name,
  category,
  price,
  marks,
  description,
  id,
}: iEditProductModal) {
  const { editProductLoading, editProduct } = useContext(EditProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditProductModal>({
    resolver: yupResolver(editProductSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ModalEditProductStyle>
        <h2>Atualizar informações do produto.</h2>
        <form
          onSubmit={handleSubmit((data) => editProduct({ ...data, id }))}
          noValidate
        >
          <div>
            <div>
              <Input
                labelName="Foto do brinquedo"
                id="toysImage"
                inputType="url"
                required={true}
                placeholder=""
                width="100%"
                register={register("img")}
                value={img}
              />
              {errors.img && <span>{errors.img.message}</span>}
              <Input
                labelName="Nome"
                id="toyName"
                inputType="text"
                required={true}
                placeholder=""
                width="100%"
                register={register("toy_name")}
                value={toy_name}
              />
              {errors.toy_name && <span>{errors.toy_name.message}</span>}
              <div>
                <div>
                  <fieldset>
                    <label htmlFor="toyCategory">Categoria</label>
                    <select
                      defaultValue={category}
                      id="toyCategory"
                      required={true}
                      {...register("category")}
                    >
                      <option value="">Selecione</option>
                      <option value="Bonecos">Bonecos</option>
                      <option value="Pelúcias">Pelúcias</option>
                      <option value="Carrinhos">Carrinhos</option>
                      <option value="Quebra cabeças">Quebra cabeças</option>
                      <option value="Instrumento musical">
                        Instrumento musical
                      </option>
                      <option value="Outros">Outros</option>
                    </select>
                  </fieldset>
                  {errors.category && <span>{errors.category.message}</span>}
                </div>
                <div>
                  <Input
                    labelName="Preço"
                    id="toyPrice"
                    inputType="number"
                    required={true}
                    placeholder="R$"
                    width="100%"
                    register={register("price")}
                    value={`${price.toFixed(2)}`}
                  />
                  {errors.price && <span>{errors.price.message}</span>}
                </div>
              </div>
            </div>
            <div>
              <Input
                labelName="Marca (opcional)"
                id="toyMarks"
                inputType="text"
                required={true}
                placeholder=""
                width="100%"
                register={register("marks")}
                value={marks}
              />
              {errors.marks && <span>{errors.marks.message}</span>}
              <fieldset>
                <label htmlFor="toyDescription">Descrição</label>
                <textarea
                  id="toyDescription"
                  required={true}
                  {...register("description")}
                  defaultValue={description}
                ></textarea>
              </fieldset>
              {errors.description && <span>{errors.description.message}</span>}
            </div>
          </div>
          <Button styleButton="style3">
            {editProductLoading ? "Editando..." : "Editar produto"}
          </Button>
        </form>
      </ModalEditProductStyle>
    </motion.div>
  );
}
