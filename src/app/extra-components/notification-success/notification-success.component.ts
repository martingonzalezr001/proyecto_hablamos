import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-success',
  templateUrl: './notification-success.component.html',
  styleUrls: ['./notification-success.component.css']
})
export class NotificationSuccessComponent {

  @Input() tipo: string;

    //Modal

    
    exito = '¡Se ha registrado correctamente!';
    exito_descripcion = 'Ahora deberá registrar los siguientes datos para completar su perfil';

    enviado = '¡Correo enviado!';
    recuperar_msg = 'Se ha enviado un correo a tu cuenta de correo electrónico con un enlace para recuperar tu contraseña';
    

}
