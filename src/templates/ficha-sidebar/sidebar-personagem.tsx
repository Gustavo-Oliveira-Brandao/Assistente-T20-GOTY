import { Personagem } from "../../@types/Personagem"
import BotaoModular from "../../components/botao-modular/botao-modular"
import styles from "./sidebar-personagem.module.scss"

import racaIcon from "@assets/icons/raca.svg"
import classeIcon from "@assets/icons/classe.svg"
import origemIcon from "@assets/icons/origem.svg"
import divindadeIcon from "@assets/icons/divindade.svg"
import defesaIcon from "@assets/icons/ca.svg"
import deslocamentoIcon from "@assets/icons/deslocamento.svg"

import fotoPersonagemMock from "@assets/character.png"
import BarraRecurso from "../../components/barra-recurso/barra-recurso"
import CardPericia from "../../components/pericia/card-pericia"

function SidebarPersonagem({ personagem }: { personagem: Personagem }) {


    return (
        <aside className={styles.sidebar}>
            <div className={styles.fotoPersonagem}>
                <img src={fotoPersonagemMock} alt="" />
                <span className={styles.opacidade}></span>
                <div className={styles.info}>
                    <BotaoModular icone={racaIcon} css="comIcone" texto={personagem.raca} />
                    <BotaoModular icone={classeIcon} css="comIcone" texto={personagem.classe} />
                    <BotaoModular icone={origemIcon} css="comIcone" texto={personagem.origem} />
                    <BotaoModular icone={divindadeIcon} css="comIcone" texto={personagem.divindade} />
                </div>
            </div>
            <div className={styles.nome}>
                <p>{personagem.nome}</p>
            </div>
            <div className={styles.barrasRecurso}>
                <BarraRecurso css="verde" atual={personagem.recursos[0].valorAtual} maximo={personagem.recursos[0].valorMaximo} />
                <BarraRecurso css="azul" atual={personagem.recursos[1].valorAtual} maximo={personagem.recursos[1].valorMaximo} />
            </div>
            <div className={styles.infoSecundaria}>
                <div className={styles.titulo}>
                    <h2>Defesa</h2>
                </div>
                <div className={styles.recurso}>
                    <img src={defesaIcon} alt="Defesa" />
                    <BotaoModular texto={personagem.defesa} css="recursoSecundario" />
                </div>
            </div>
            <div className={styles.infoSecundaria}>
                <div className={styles.titulo}>
                    <h2>Deslocamento</h2>
                </div>
                <div className={styles.recurso}>
                    <img src={deslocamentoIcon} alt="Deslocamento" />
                    <BotaoModular texto={personagem.deslocamentos[0].valorBase} css="recursoSecundario" />
                </div>
            </div>
            <div className={styles.infoSecundaria}>
                <div className={styles.titulo}>
                    <h2>Testes de resistência</h2>
                </div>
                <div className={styles.pericias}>
                    {
                        personagem.pericias.map((pericia) => (
                            pericia.ehTesteResistencia ?
                                (<CardPericia key={pericia.id} pericia={pericia} />)
                                :
                                null
                        ))
                    }
                </div>
            </div>
            <div className={styles.infoSecundaria}>
                <div className={styles.titulo}>
                    <h2>Iniciativa</h2>
                </div>
                <div className={styles.pericias}>
                    {
                        personagem.pericias.map((pericia) => (
                            pericia.nome == "iniciativa" ?
                                (<CardPericia key={pericia.id} pericia={pericia} />)
                                :
                                null
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

export default SidebarPersonagem