import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-success',
  templateUrl: './notification-success.component.html',
  styleUrls: ['./notification-success.component.css']
})
export class NotificationSuccessComponent {

    //Modal
    exito = '¡Se ha registrado correctamente!';
    exito_descripcion = 'Ahora deberá registrar los siguientes datos para completar su perfil';

}
