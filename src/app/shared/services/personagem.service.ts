import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personagem } from '../../core/types/Personagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private http : HttpClient) { }

  url = "data/PersonagemTeste.json"

  buscarMock(){
    return this.http.get<Personagem>(this.url)
  }
}
