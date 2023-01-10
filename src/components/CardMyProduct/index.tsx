import { iCardMyProductProps } from "../../interfaces";
import { CardMyProductStyle } from "./style";
import editPencil from "../../assets/editPencil.svg";
import trashIcon from "../../assets/trash.svg";
import { useContext } from "react";
import { ModalDeleteContext } from "./../../context/DeleteContext";

export function CardMyProduct({
  toy_name,
  img,
  price,
  id,
}: iCardMyProductProps) {
  const { openDelete } = useContext(ModalDeleteContext);

  function deleteAnnounce() {
    const productId = JSON.stringify(id);
    localStorage.setItem("@ProductID: WeeToys", productId);
    openDelete();
  }

  return (
    <CardMyProductStyle>
      <div>
        <div>
          <img src={img} alt={toy_name} />
        </div>
        <div>
          <span>{toy_name}</span>
          <span>Preço R$ {price.toFixed(2).replace(".", ",")}</span>
        </div>
      </div>
      <div>
        <img src={editPencil} alt="Editar produto" />
        <img src={trashIcon} alt="Excluir produto" onClick={deleteAnnounce} />
      </div>
    </CardMyProductStyle>
  );
}
