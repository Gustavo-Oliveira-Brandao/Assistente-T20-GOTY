import { useState } from "react";
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

    const [treinamento, setTreinamento] = useState("Destreinado")
    if (pericia.ehTreinado) {
        setTreinamento("Treinado")
    }

    return (
        <div className={`${styles[css]} ${styles.padrao}`}>
            <div className={styles.parteEsquerda}>
                <button>
                    <p className={styles.nome}>{pericia.nome}</p>
                    {css !== "sidebar" && (
                        <p className={styles.atributo}>{pericia.atributo}</p>
                    )}
                </button>
            </div>
            <div className={styles.parteDireita}>
                {css !== "sidebar" && (
                    <p className={styles.treinamento}>{treinamento}</p>
                )}
                <BotaoRolagem valor={10} />
            </div>
        </div>
    )
}

export default CardPericia