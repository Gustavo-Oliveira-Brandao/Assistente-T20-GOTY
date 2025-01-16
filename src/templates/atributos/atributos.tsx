import styles from "@assets/styles/ficha-conteudo.module.scss"
import { Personagem } from "../../@types/Personagem"
import CardAtributo from "../../components/atributo/card-atributo"
import CardPericia from "../../components/pericia/card-pericia"

function Atributos({ personagem }: { personagem: Personagem }) {


    return (
        <>
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
                            (pericia.categoria === "geral" && pericia.nome !== "iniciativa") && (
                                <CardPericia key={pericia.id} pericia={pericia} css="pericia" />
                            )
                        ))
                    }
                </div>
            </div>
            <div className={styles.secao}>
                <div className={styles.titulo}>
                    <h2>Conhecimento</h2>
                </div>
                <div className={styles.pericias}>
                    {
                        personagem.pericias.map((pericia) => (
                            pericia.categoria === "conhecimento" && (
                                <CardPericia key={pericia.id} pericia={pericia} css="pericia" />
                            )))
                    }
                </div>
            </div>
            <div className={styles.secao}>
                <div className={styles.titulo}>
                    <h2>Oficio</h2>
                </div>
                <div className={styles.pericias}>
                    {
                        personagem.pericias.map((pericia) => (
                            pericia.categoria === "oficio" && (
                                <CardPericia key={pericia.id} pericia={pericia} css="pericia" />
                            )))
                    }
                </div>
            </div>
        </>
    )
}

export default Atributos