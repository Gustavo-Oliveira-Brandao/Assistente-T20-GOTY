import { useEffect, useState } from "react"
import SidebarPersonagem from "../../templates/ficha-sidebar/sidebar-personagem"
import { Personagem } from "../../@types/Personagem"
import axios from "axios"
import { inicializarPersonagem } from "../../utils/inicializarPersonagem"
import styles from "./ficha-personagem.module.scss"
import Atributos from "../../templates/atributos/atributos"

function FichaPersonagem() {

    const [personagem, setPersonagem] = useState<Personagem>()

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
                            <Atributos personagem={personagem} />
                        </div>
                    </>
                )
            }
        </main>
    )
}

export default FichaPersonagem