import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private loginService:LoginServiceService,fb:FormBuilder, private route:ActivatedRoute, private router:Router) {
    this.loginUser = fb.group({
      email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      password: ['', Validators.required],
    });
   }

   
form_sign_in:boolean = false;
  
  loginUser:FormGroup;
  logeado:boolean;
  intento_log:boolean = false;

  mostrarError:boolean = false;

  strError:string;
  variable:string | null;
 
email:string;
password:string;
  
   convertirABooleano(str:string){
    if(str == "true"){
      return true;
    }
    else{
      return false;
    }
   }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    
    if(navigation?.extras.state){
      console.log("AOLA");
      this.form_sign_in = navigation?.extras.state['signIn'];

      console.log("Form sign in: ",this.form_sign_in);
    }
  }

  mirar(){
    var passwd = document.getElementById("password");
     if(passwd?.getAttribute("type") == "password"){
      passwd.setAttribute("type", "text");
      }else{
        passwd?.setAttribute("type", "password");
      }
  }

  async login(form:FormGroup){

    if(this.email == undefined || this.password == undefined){
      this.logeado = false;
      this.intento_log = true;
      this.strError = "auth/invalid-email";
      console.log("Pasa pacaa locoo");
    }
    this.email = form.value.email.toLowerCase();
    this.password = form.value.password;
    const email = this.email;
    const password = this.password;
    if(this.form_sign_in != true){
   const response= await this.loginService.login(email,password);
    }
    else{
      const response = await this.loginService.signIn(email,password);
    }
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
  

  mostrarOcultarSignIn(){
    switch(this.form_sign_in){
      case true:
      this.form_sign_in = false;
      break;
      case false:
      this.form_sign_in = true;
      break;
    }
    
    
  }

}
