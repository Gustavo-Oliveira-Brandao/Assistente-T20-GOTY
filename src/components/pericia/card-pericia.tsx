import { Pericia } from "../../@types/Pericia";
import BotaoRolagem from "../botao-rolagem/botao-rolagem";
import styles from "./card-pericia.module.scss"

function CardPericia({
    pericia,
    css
}: {
    pericia: Pericia,
    css: string
}) {

    return (
        <div className={`${styles[css]} ${styles.padrao}`}>
            <div className={styles.parteEsquerda}>
                <button>
                    <p className={styles.nome}>{pericia.nome}</p>
                    {!pericia.ehTesteResistencia && pericia.nome !== "iniciativa" &&(
                        <p className={styles.atributo}>{pericia.atributo}</p>
                    )}
                </button>
            </div>
            <BotaoRolagem valor={10} />
        </div>
    )
}

export default CardPericia