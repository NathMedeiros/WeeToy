import React from "react";
import { useForm } from "react-hook-form";
import { Div } from "./styles";
import { InputAnnounce } from "../InputAnnounce/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { announceSchema } from "./announceSchema";
import { IToyData } from "../../interfaces";

export function Announce() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IToyData>({
    resolver: yupResolver(announceSchema),
    defaultValues: {
      img: "",
      marks: "",
      toy_name: "",
      category: "",
      price: 0,
      description: "",
    },
  });

  function getToy(data: IToyData) {
    const user = localStorage.getItem("@USER: WeeToys");
    console.log(user);
    console.log(data);
    const { category, price, marks, toy_name, img } = data;

    const newAnnounce = {
      category: category,
      price: price,
      marks: marks,
      toy_name: toy_name,
      img: img,
      // id: ,
    };
    console.log(newAnnounce);
  }

  return (
    <Div>
      <p className="announceTitle">Anuncie seu produto, é fácil e rápido!</p>
      <p className="subtitle">capriche na foto e na descrição do seu produto</p>
      <form onSubmit={handleSubmit(getToy)}>
        <div className="nameMark">
          <InputAnnounce
            id="image"
            placeholder=""
            labelName="Foto do brinquedo"
            required={false}
            inputType="text"
            width="500px"
            register={register("img")}
          />
          {errors.img?.message}
          <InputAnnounce
            id="mark"
            placeholder=""
            labelName="Marca (opicional)"
            required={false}
            inputType="text"
            width="500px"
            register={register("marks")}
          />
        </div>
        <div className="divColl">
          <div className="nameCategoryPriceDiv">
            <InputAnnounce
              id="name"
              placeholder=""
              labelName="Nome"
              required={false}
              inputType="text"
              width="500px"
              register={register("toy_name")}
            />
            {errors.toy_name?.message}
            <div className="categoryPrice">
              <div className="colDiv">
                <label htmlFor="category">Categoria</label>
                <select {...register("category")}>
                  <option value=""></option>
                  <option value="Bonecos">Bonecos</option>
                  <option value="Pelúcias">Pelúcias</option>
                  <option value="Carrinhos">Carrinhos</option>
                  <option value="Quebra cabeças">Quebra cabeças</option>
                  <option value="Instrumento musical">
                    Instrumento musical
                  </option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              {errors.category?.message}
              <InputAnnounce
                id="Price"
                placeholder="R$"
                labelName="Preço"
                required={false}
                inputType="number"
                width="230px"
                register={register("price")}
              />
              {errors.price?.message}
            </div>
          </div>
          <div className="colDiv">
            <label htmlFor="description">Descrição</label>
            <textarea {...register("description")} />
          </div>
        </div>
        <button>Anunciar Produto</button>
      </form>
    </Div>
  );
}
