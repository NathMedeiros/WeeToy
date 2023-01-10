import { useContext, useEffect, useState } from "react";
import { MyAdsStyled, UlAds } from "./style";
import { api } from "../../request/api";
import { CardMyProduct } from "../CardMyProduct";

import Modal from "react-modal";
import { ModalDeleteContext } from "./../../context/DeleteContext";
import { Delete } from "../ModalDelete";
import { UserAnnounceContext } from "./../../context/UserAnnounceContext";

import { iEditProductModal } from "../../interfaces";

export function MyAds() {
  const [userAds, setUserAds] = useState([] as iEditProductModal[]);
  const { isOpen, closeDelete } = useContext(ModalDeleteContext);
  const { loadUser } = useContext(UserAnnounceContext);
  console.log(loadUser);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@USER: WeeToys")!);
    const token = localStorage.getItem("@TOKEN: WeeToys");

    async function getUserAds() {
      try {
        const request = await api.get(`/users/${user.id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setUserAds(request.data.toy);
        console.log(request.data.toy);
      } catch (error) {
        console.log(error);
      }
    }

    getUserAds();
  }, []);
  return (
    <MyAdsStyled>
      <UlAds>
        <h2>Anúncios Ativos</h2>

        {userAds.length > 0 ||
        (loadUser != undefined && loadUser.length > 0) ? (
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
