import styles from "@assets/styles/ficha-conteudo.module.scss"
import { Personagem } from "../../@types/Personagem";
import Ataque from "../../components/ataque/ataque";

function Acoes({personagem}:{personagem:Personagem}){

    console.log(personagem)
    
    return(
        <>
        <div className={styles.secao}>
            <div className={styles.titulo}>
                <h2>Ações</h2>
            </div>
            <div className={styles.acoes}>
                <Ataque />
            </div>
        </div>
        </>
    )
}

export default Acoes