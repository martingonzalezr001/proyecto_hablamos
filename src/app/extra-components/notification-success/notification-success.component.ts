import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-success',
  templateUrl: './notification-success.component.html',
  styleUrls: ['./notification-success.component.css']
})
export class NotificationSuccessComponent {

  @Input() tipo: string;

  exito:string='';
  exito_descripcion:string='';
    //Modal
  ngOnInit(): void {
    console.log("tipo:", this.tipo);

    if(this.tipo == 'registro'){
      this.exito = '¡Se ha registrado correctamente!';
      this.exito_descripcion = 'Ahora deberá registrar los siguientes datos para completar su perfil';
    }else if(this.tipo == 'recuperar'){

      this.exito = '¡Correo enviado!';
      this.exito_descripcion = 'Se ha enviado un correo a tu cuenta de correo electrónico con un enlace para recuperar tu contraseña';
    }else{
      this.exito = '';
      this.exito_descripcion = '';

    }
  }
    
    
  

    
    

}
