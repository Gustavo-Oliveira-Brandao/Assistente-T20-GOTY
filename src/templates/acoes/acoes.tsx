import styles from "@assets/styles/ficha-conteudo.module.scss"
import { Personagem } from "../../@types/Personagem";

function Acoes({personagem}:{personagem:Personagem}){

    return(
        <>
        <div className={styles.secao}>
            <div className={styles.titulo}>
                <h2>Ações</h2>
            </div>
        </div>
        </>
    )
}

export default Acoes