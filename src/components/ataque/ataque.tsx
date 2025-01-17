import { Arma } from "../../@types/Arma";
import styles from "./ataque.module.scss"

function Ataque({ ataque }: { ataque?: Arma }) {

    console.log(ataque)
    return (
        <div className={styles.ataque}>

            <div className={styles.detalhes}>
                <p className={styles.nome}>Ataque desarmado</p>
            </div>
        </div>
    )
}

export default Ataque