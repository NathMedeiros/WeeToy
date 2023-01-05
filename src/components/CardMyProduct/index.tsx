import { iCardMyProductProps } from "../../interfaces";
import { CardMyProductStyle } from "./style";
import editPencil from "../../assets/editPencil.svg"
import trash from "../../assets/trash.svg"

export function CardMyProduct({ name, image, price, id }: iCardMyProductProps) {
    return (
        <CardMyProductStyle>
            <div>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <span>{name}</span>
                    <span>Preço R$ {price.toFixed(2).replace(".", ",")}</span>
                </div>
            </div>
            <div>
                <img src={editPencil} alt="Editar produto" />
                <img src={trash} alt="Excluir produto" />
            </div>
        </CardMyProductStyle>
    )
}