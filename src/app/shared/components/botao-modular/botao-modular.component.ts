import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-modular',
  imports: [],
  templateUrl: './botao-modular.component.html',
  styleUrl: './botao-modular.component.scss'
})
export class BotaoModularComponent {

  @Input() css!: string
  @Input() icone!: string
  @Input() texto!: string
}
