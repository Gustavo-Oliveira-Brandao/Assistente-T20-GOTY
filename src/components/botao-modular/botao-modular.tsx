import styles from "./botao-modular.module.scss"

function BotaoModular({
    icone,
    css,
    texto
}: {
    icone?: string,
    css: string,
    texto?: string | number
}) {

    return (
        <button className={styles[css]}>
            {
                icone &&
                <img className={styles.icone} src={icone} alt={String(texto)} />
            }
            {
                texto &&
                <p>{texto}</p>
            }
        </button>
    )
}

export default BotaoModular