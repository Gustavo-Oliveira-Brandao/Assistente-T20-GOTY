
import { Personagem } from "../../@types/Personagem"
import CardAtributo from "../../components/atributo/card-atributo"
import CardPericia from "../../components/pericia/card-pericia"
import styles from "./ficha-conteudo.module.scss"

function FichaConteudo({ personagem }: { personagem: Personagem }) {


    return (
        <div className={styles.conteudo}>
            <div className={styles.secao}>
                <div className={styles.titulo}>
                    <h2>Atributos</h2>
                </div>
                <div className={styles.atributos}>
                    {
                        personagem.atributos.map((atributo) => (
                            <CardAtributo key={atributo.id} atributo={atributo} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.secao}>
                <div className={styles.titulo}>
                    <h2>Pericias</h2>
                </div>
                <div className={styles.pericias}>
                    {
                        personagem.pericias.map((pericia) => (
                            <CardPericia key={pericia.id} pericia={pericia} css="pericia" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FichaConteudo