import styles from "./botao-rolagem.module.scss"
import d20Icon from "@assets/icons/d20.svg"

function BotaoRolagem({valor} : {valor:number}){


    return(
        <button className={styles.rollBtn}>
            <img src={d20Icon} alt="Rolagem" />
            <p>{valor}</p>
        </button>
    )
}

export default BotaoRolagem