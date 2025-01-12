import { Pericia } from "../../@types/Pericia";
import BotaoRolagem from "../botao-rolagem/botao-rolagem";
import styles from "./card-pericia.module.scss"

function CardPericia({
    pericia
} : {
    pericia: Pericia
}){

    return(
        <div className={styles.pericia}>
            <button>{pericia.nome}</button>
            <BotaoRolagem valor={10} />
        </div>
    )
}

export default CardPericia