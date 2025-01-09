import { Component, Input } from '@angular/core';
import { BotaoModularComponent } from "../../../../shared/components/botao-modular/botao-modular.component";
import { BarraRecursoComponent } from "../../components/barra-recurso/barra-recurso.component";
import { PericiaComponent } from "../../components/pericia/pericia.component";
import { Pericia } from '../../../../core/types/Pericia';
import { Personagem } from '../../../../core/types/Personagem';

@Component({
  selector: 'app-sidebar',
  imports: [BotaoModularComponent, BarraRecursoComponent, PericiaComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() personagem !: Personagem
}
