import React from "react";
import { useForm } from "react-hook-form";
import { Div } from "./styles";
import { InputAnnounce } from "./../InputAnnounce/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { announceSchema } from "./announceSchema";
import { IToyData } from "../../interfaces";

export function Announce() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    console.log(data);
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
            required={true}
            inputType="text"
            width="500px"
            {...register("img")}
          />
          <InputAnnounce
            id="mark"
            placeholder=""
            labelName="Marca (opicional)"
            required={true}
            inputType="text"
            width="500px"
            {...register("marks")}
          />
        </div>
        <div className="divColl">
          <div className="nameCategoryPriceDiv">
            <InputAnnounce
              id="name"
              placeholder=""
              labelName="Nome"
              required={true}
              inputType="text"
              width="500px"
              {...register("toy_name")}
            />
            <div className="categoryPrice">
              <div className="colDiv">
                <label htmlFor="category">Categoria</label>
                <select {...register("category")}>
                  <option value=""></option>
                </select>
              </div>
              <InputAnnounce
                id="name"
                placeholder="R$"
                labelName="Preço"
                required={true}
                inputType="number"
                width="230px"
                {...register("price")}
              />
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
