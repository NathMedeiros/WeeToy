import { iEditProductModal } from "../../interfaces";
import { CardMyProductStyle } from "./style";
import editPencil from "../../assets/editPencil.svg";
import trash from "../../assets/trash.svg";
import { useContext } from "react"
import { EditProductContext } from "../../context/EditProductContext";

export function CardMyProduct({
  toy_name,
  img,
  price,
  id,
  description,
  marks,
  category
}: iEditProductModal) {

  const { setModalInfo, setOpenEditProduct } = useContext(EditProductContext)

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
        <img src={editPencil} onClick={() => {
          setModalInfo({
            id: id,
            img: img,
            toy_name: toy_name,
            price: price,
            description: description,
            category: category,
            marks: marks
          })
          setOpenEditProduct(true)
        }} alt="Editar produto" />
        <img src={trash} alt="Excluir produto" />
      </div>
    </CardMyProductStyle>
  );
}
