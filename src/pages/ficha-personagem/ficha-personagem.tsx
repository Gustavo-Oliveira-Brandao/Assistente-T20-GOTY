import { useEffect, useState } from "react"
import SidebarPersonagem from "../../templates/ficha-sidebar/sidebar-personagem"
import { Personagem } from "../../@types/Personagem"
import axios from "axios"
import { inicializarPersonagem } from "../../utils/inicializarPersonagem"
import styles from "./ficha-personagem.module.scss"
import Atributos from "../../templates/atributos/atributos"
import AtributosIcon from "@assets/icons/atributos.svg"
import AcoesIcon from "@assets/icons/acoes.svg"
import GrimorioIcon from "@assets/icons/grimorio.svg"
import Acoes from "../../templates/acoes/acoes"
import Grimorio from "../../templates/grimorio/grimorio"

function FichaPersonagem() {

    const [personagem, setPersonagem] = useState<Personagem>()
    const [aba, setAba] = useState("atributos")

    useEffect(() => {
        axios.get<Personagem>("src/data/PersonagemMock.json")
            .then(response => {
                const personagemInicializado = inicializarPersonagem(response.data)
                setPersonagem(personagemInicializado)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])



    return (
        <main>
            {
                personagem && (
                    <>
                        <div className={styles.ficha}>
                            <SidebarPersonagem personagem={personagem} />
                            <div className={styles.conteudo}>
                                {
                                    aba == "atributos" && (
                                        <Atributos personagem={personagem} />
                                    )
                                }
                                {
                                    aba == "acoes" && (
                                        <Acoes personagem={personagem} />
                                    )
                                }
                                {
                                    aba == "grimorio" && (
                                        <Grimorio />
                                    )
                                }
                            </div>
                        </div>
                        <nav className={styles.navButtons}>
                            <button className={aba == "atributos" ? styles.active : undefined} onClick={() => setAba("atributos")}><img src={AtributosIcon} alt="atributos" /></button>
                            <button className={aba == "acoes" ? styles.active : undefined} onClick={() => setAba("acoes")}><img src={AcoesIcon} alt="acoes" /></button>
                            <button className={aba == "grimorio" ? styles.active : undefined} onClick={() => setAba("grimorio")}><img src={GrimorioIcon} alt="grimorio" /></button>
                        </nav>
                    </>
                )
            }
        </main>
    )
}

export default FichaPersonagem