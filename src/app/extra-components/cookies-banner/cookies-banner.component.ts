import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cookies-banner',
  templateUrl: './cookies-banner.component.html',
  styleUrls: ['./cookies-banner.component.css']
})
export class CookiesBannerComponent {


  //Objetos de salida 
  @Output() cerrar = new EventEmitter<boolean>();


  cerrarModal(){
    this.cerrar.emit(true);
  }
}
