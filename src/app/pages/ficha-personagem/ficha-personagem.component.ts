import { Component } from '@angular/core';
import { SidebarComponent } from "./ui/sidebar/sidebar.component";
import { Personagem } from '../../core/types/Personagem';
import { PersonagemService } from '../../shared/services/personagem.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ficha-personagem',
  imports: [SidebarComponent],
  templateUrl: './ficha-personagem.component.html',
  styleUrl: './ficha-personagem.component.scss'
})
export class FichaPersonagemComponent {

  personagem !: Personagem

  subscription: Subscription

  constructor(private personagemService : PersonagemService){
    this.subscription = this.personagemService.buscarMock().subscribe(data => {
      this.personagem = data
      console.log(data)
    })
  }

}
