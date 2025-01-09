import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-rolagem',
  imports: [],
  templateUrl: './botao-rolagem.component.html',
  styleUrl: './botao-rolagem.component.scss'
})
export class BotaoRolagemComponent {

  @Input() valor!: number
}
