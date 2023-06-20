import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notificacion-enviada',
  templateUrl: './notificacion-enviada.component.html',
  styleUrls: ['./notificacion-enviada.component.css']
})
export class NotificacionEnviadaComponent {

  @Output() cerrar = new EventEmitter<boolean>();

  cerrarModal(){
    this.cerrar.emit(true);
  }
}
