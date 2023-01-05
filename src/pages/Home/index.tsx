import { Header } from "../../components/Header"
import {HomeStyled} from "./styled"

import imageChild from "./../../assets/imageChild.png"
import { Button } from "../../components/Button"

export function Home (){
    return (
        <HomeStyled>
            <Header/>
            <main>
                <section className="sectionImage">
                    <img src={imageChild} alt="Criança" className="imageChild"/>
                    <div className="divTextButtonRegister">
                        <div className="divContent">
                            <p className="textHome">Brinquedos quase novos ou nunca usados procurando um novo dono. Compre online e receba em sua casa.</p>
                            <Button padding="small" styleButton="style1" fontSize="1.688rem">Cadastre-se</Button>
                        </div>
                    </div>
                </section>
                <section className="sectionList">
                    <ul>

                    </ul>
                </section>
            </main>
        </HomeStyled>
    )
}