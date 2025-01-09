import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaPersonagemComponent } from "./pages/ficha-personagem/ficha-personagem.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FichaPersonagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assistente-T20';
}
