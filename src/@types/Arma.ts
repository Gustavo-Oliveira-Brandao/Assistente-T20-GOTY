import { Bonus } from "./Bonus";
import { Dano } from "./Dano";
import { ItemInventario } from "./ItemInventario";
import { PropriedadeItem } from "./PropriedadeItem";

export interface Arma extends ItemInventario{
    grupo: string
    alcance: string
    margemCritico: number
    multiplicadorCritico: number
    bonus: Bonus[]
    danos: Dano[]
    propriedades: PropriedadeItem[]
}