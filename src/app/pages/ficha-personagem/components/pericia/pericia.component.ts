import { Component, Input } from '@angular/core';
import { BotaoRolagemComponent } from "../../../../shared/components/botao-rolagem/botao-rolagem.component";
import { Pericia } from '../../../../core/types/Pericia';

@Component({
  selector: 'app-pericia',
  imports: [BotaoRolagemComponent],
  templateUrl: './pericia.component.html',
  styleUrl: './pericia.component.scss'
})
export class PericiaComponent {

  @Input() pericia!: Pericia
}
