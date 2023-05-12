import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  iniciar_sesion = 'Iniciar sesión';
  comenzar = 'Comenzar';
  correo_electronico = 'Correo electrónico';
  contrasenia = 'Contraseña';
  olvidaste_contrasenia = '¿Olvidaste tu contraseña?';
  recordar_contrasenia = 'Recordar contraseña';
  

  mirar(){
    var passwd = document.getElementById("password");
     if(passwd?.getAttribute("type") == "password"){
      passwd.setAttribute("type", "text");
      }else{
        passwd?.setAttribute("type", "password");
      }
  }

}
