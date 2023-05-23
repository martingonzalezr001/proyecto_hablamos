import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  iniciar_sesion = 'Iniciar sesión';
  nuevo_usuario = '¿Nuevo usuario?';
  nuevo_descripcion = 'Escribe que correo y contraseña te gustaría utilizar como nuevo usuario';
  comenzar = 'Comenzar';
  correo_electronico = 'Correo electrónico';
  contrasenia = 'Contraseña';
  olvidaste_contrasenia = '¿Olvidaste tu contraseña?';
  recordar_contrasenia = 'Recordar contraseña';

  constructor(private loginService:LoginServiceService,fb:FormBuilder) {
    this.loginUser = fb.group({
      email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      password: ['', Validators.required],
    });
   }

   

  
  loginUser:FormGroup;
  logeado:boolean;
  intento_log:boolean = false;

  mostrarError:boolean = false;

  strError:string;
  
 
email:string;
password:string;
  

  

  mirar(){
    var passwd = document.getElementById("password");
     if(passwd?.getAttribute("type") == "password"){
      passwd.setAttribute("type", "text");
      }else{
        passwd?.setAttribute("type", "password");
      }
  }

  async login(form:FormGroup){

    this.email = form.value.email.toLowerCase();
    this.password = form.value.password;
    const email = this.email;
    const password = this.password;
   const response= await this.loginService.login(email,password);
  
   this.strError = this.loginService.strError;
   console.log("Error tipo: ",this.strError);
    if(this.loginService.isValidEmail){
      this.logeado = true;
    }
    this.intento_log = true;
    console.log(" Error mail invalido: ",this.loginService.errorInvalidEmail);
    if(!this.loginService.errorEmailAlreadyInUse && !this.loginService.errorInvalidEmail && !this.loginService.errorPasswordLength && this.loginService.isValidEmail ){
      this.logeado = true;
     
    }
    else{
      this.logeado = false;
      form.value.email = "";
      form.value.password = "";
    }

    
    
  }

}
