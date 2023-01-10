import { iCardHistoryBuy } from "../../interfaces"
import { CardHistoricBuyStyle } from "./style"

export function CardHistoricBuy({ img, toy_name, price }: iCardHistoryBuy) {
    return (
        <CardHistoricBuyStyle>
            <div>
                <img src={img} alt={toy_name} />
            </div>
            <span>{toy_name}</span>
            <span>Preço: R$ {price.toFixed(2).replace(".", ",")}</span>
        </CardHistoricBuyStyle>
    )
}