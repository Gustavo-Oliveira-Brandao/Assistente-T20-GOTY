import { Atributo } from "@/@types/Atributo"
import styles from "./card-atributo.module.scss"
import BotaoRolagem from "../botao-rolagem/botao-rolagem"

function CardAtributo({ atributo }: { atributo: Atributo }) {


    return (
        <div className={styles.atributo}>
            <div className={styles.titulo}>
                <button>{atributo.nome}</button>
            </div>
            <BotaoRolagem valor={10} />
        </div>
    )
}

export default CardAtributo