import { Component } from '@angular/core';
import { SidebarComponent } from "./ui/sidebar/sidebar.component";
import { Personagem } from '../../core/types/Personagem';

@Component({
  selector: 'app-ficha-personagem',
  imports: [SidebarComponent],
  templateUrl: './ficha-personagem.component.html',
  styleUrl: './ficha-personagem.component.scss'
})
export class FichaPersonagemComponent {

  personagemMock: Personagem = {
    id: 738,
    nome: 'Personagem Exemplo',
    raca: 'Elfo',
    classe: 'Mago',
    origem: 'Floresta Encantada',
    divindade: 'Deus da Magia',
    nivel: 15,
    experiencia: 100,
    recursos: [
      {
        id: 1,
        categoria: "vida",
        valorAtual: 100,
        valorTemporario: 100
      },
      {
        id: 2,
        categoria: "mana",
        valorAtual: 100,
        valorTemporario: 100
      }
    ],
    deslocamentos: [
      {
        id: 1,
        categoria: "caminhada",
        valor: 30
      }
    ],
    atributos: [
      { id: 1, nome: 'Força', valorBase: 15 },
      { id: 2, nome: 'Destreza', valorBase: 12 },
      { id: 3, nome: 'Constituição', valorBase: 14 },
      { id: 4, nome: 'Inteligência', valorBase: 10 },
      { id: 5, nome: 'Sabedoria', valorBase: 13 },
      { id: 6, nome: 'Carisma', valorBase: 11 }
    ],
    pericias: [
      {
        id: 1,
        nome: 'Acrobacia',
        ehTreinado: true,
        atributo: 'Destreza',
        ehTesteResistencia: true
      },
      {
        id: 2,
        nome: 'Arcanismo',
        ehTreinado: false,
        atributo: 'Inteligência',
        ehTesteResistencia: true
      },
      { id: 3, nome: 'Atletismo', ehTreinado: true, atributo: 'Força', ehTesteResistencia: true },
      {
        id: 4,
        nome: 'Enganação',
        ehTreinado: false,
        atributo: 'Carisma',
        ehTesteResistencia: false
      },
      {
        id: 5,
        nome: 'Furtividade',
        ehTreinado: true,
        atributo: 'Destreza',
        ehTesteResistencia: false
      },
      {
        id: 6,
        nome: 'Medicina',
        ehTreinado: false,
        atributo: 'Sabedoria',
        ehTesteResistencia: false
      },
      {
        id: 7,
        nome: 'iniciativa',
        ehTreinado: false,
        atributo: 'Sabedoria',
        ehTesteResistencia: false
      }
    ]
  }

}
