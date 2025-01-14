import { useEffect, useState } from "react"
import SidebarPersonagem from "../../templates/ficha-sidebar/sidebar-personagem"
import { Personagem } from "../../@types/Personagem"
import axios from "axios"
import { inicializarPersonagem } from "../../utils/inicializarPersonagem"
import styles from "./ficha-personagem.module.scss"

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
        <main className={styles.ficha}>
            {
                personagem &&
                <SidebarPersonagem personagem={personagem} />
            }
        </main>
    )
}

export default FichaPersonagem