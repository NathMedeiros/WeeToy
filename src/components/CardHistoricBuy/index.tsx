import { iCardHistoryBuy } from "../../interfaces"
import { CardHistoricBuyStyle } from "./style"

export function CardHistoricBuy({ img, name, price }: iCardHistoryBuy) {
    return (
        <CardHistoricBuyStyle>
            <div>
                <img src={img} alt={name} />
            </div>
            <span>{name}</span>
            <span>Preço: R$ {price.toFixed(2).replace(".", ",")}</span>
        </CardHistoricBuyStyle>
    )
}