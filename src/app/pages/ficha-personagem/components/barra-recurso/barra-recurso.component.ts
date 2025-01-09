import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-recurso',
  imports: [],
  templateUrl: './barra-recurso.component.html',
  styleUrl: './barra-recurso.component.scss'
})
export class BarraRecursoComponent implements OnChanges {

  @Input() atual: number = 0
  @Input() maximo: number = 0
  @Input() css: string = ""

  larguraBarra:number = 0

  ngOnInit() {
    this.larguraBarra = (this.atual / this.maximo) * 100
  }

  ngOnChanges(changes : SimpleChanges){
    this.larguraBarra = (this.atual / this.maximo ) * 100
  }
}
