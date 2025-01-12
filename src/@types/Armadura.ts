import { ItemInventario } from "./ItemInventario";

export interface Armadura extends ItemInventario{
    bonusDefesa: number
    penalidadeArmadura: number
    tipoArmadura: string
}