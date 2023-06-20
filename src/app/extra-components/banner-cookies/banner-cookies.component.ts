import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner-cookies',
  templateUrl: './banner-cookies.component.html',
  styleUrls: ['./banner-cookies.component.css']
})
export class BannerCookiesComponent {

  
  //Objetos de salida 
  @Output() cerrar = new EventEmitter<boolean>();
  @Output() aceptar = new EventEmitter<boolean>();


  aceptarCookies(){
    this.aceptar.emit(true);
    this.cerrarModal();
  }
  rechazarCookies(){
    this.cerrarModal();
  }

  cerrarModal(){
    this.cerrar.emit(true);
  }
}
