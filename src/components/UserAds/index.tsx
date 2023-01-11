import { useContext, useEffect, useState } from "react";
import { MyAdsStyled, UlAds } from "./style";
import { api } from "../../request/api";
import { CardMyProduct } from "../CardMyProduct";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { ModalDeleteContext } from "./../../context/DeleteContext";
import { Delete } from "../ModalDelete";
import { UserAnnounceContext } from "./../../context/UserAnnounceContext";

import { iEditProductModal, iUserToys } from "../../interfaces";

interface iMyAds {
  userAds: iUserToys[];
}

export function MyAds({ userAds }: iMyAds) {
  const { isOpen, closeDelete } = useContext(ModalDeleteContext);
  const { loadUser } = useContext(UserAnnounceContext);

  return (
    <MyAdsStyled>
      <Toaster />
      <UlAds>
        <h2>Anúncios Ativos</h2>

        {userAds.length > 0 ||
        (loadUser !== undefined && loadUser.length > 0) ? (
          loadUser === undefined ? (
            userAds.map((element) => (
              <CardMyProduct
                key={element.id}
                category={element.category}
                marks={element.marks}
                description={element.description}
                toy_name={element.toy_name}
                id={element.id}
                price={element.price}
                img={element.img}
              />
            ))
          ) : (
            loadUser.map((element) => (
              <CardMyProduct
                key={element.id}
                category={element.category}
                marks={element.marks}
                description={element.description}
                toy_name={element.toy_name}
                id={element.id}
                price={element.price}
                img={element.img}
              />
            ))
          )
        ) : (
          <h3>Você ainda não tem brinquedos anunciados</h3>
        )}
      </UlAds>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeDelete}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content-announce"
      >
        <Delete />
      </Modal>
    </MyAdsStyled>
  );
}
