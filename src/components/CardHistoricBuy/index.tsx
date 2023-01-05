import { iCardHistoryBuy } from "../../interfaces"
import { CardHistoricBuyStyle } from "./style"

export function CardHistoricBuy({ image, name, price }: iCardHistoryBuy) {
    return (
        <CardHistoricBuyStyle>
            <div>
                <img src={image} alt={name} />
            </div>
            <span>{name}</span>
            <span>Preço: R$ {price.toFixed(2).replace(".", ",")}</span>
        </CardHistoricBuyStyle>
    )
}