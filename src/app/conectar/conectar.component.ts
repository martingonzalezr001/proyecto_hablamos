import { Component } from '@angular/core';

@Component({
  selector: 'app-conectar',
  templateUrl: './conectar.component.html',
  styleUrls: ['./conectar.component.css']
})
export class ConectarComponent {
tlfModal:boolean = false;

  abrirModal(){
    this.tlfModal = true;
  }

  cerrarModal(evento:boolean){
    if(evento){
      this.tlfModal = false;
    }

  }
}
