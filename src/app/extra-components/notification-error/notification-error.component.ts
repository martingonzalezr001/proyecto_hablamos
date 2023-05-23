import { Component, Input } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-notification-error',
  templateUrl: './notification-error.component.html',
  styleUrls: ['./notification-error.component.css']
})
export class NotificationErrorComponent {

  @Input() error:any;
  @Input() logeado:any;

  strError:string;

  constructor() { } 

  ngOnInit(): void {
    
    console.log("Logeado: ",this.logeado);

    switch(this.error){
      case "auth/invalid-email":
        console.log("Correo no válido");
        this.strError = "El correo electrónico o la contraseña no son válidos.";
        break;
      case "auth/email-already-in-use":
        console.log("Correo ya en uso");
        this.strError = "El correo electrónico ya está en uso.";
        break;
      case "auth/weak-password":
        console.log("Contraseña débil");
        this.strError = "La contraseña debe tener al menos 6 caracteres.";
        break;
      case "Unsoported field value: undefined":
        console.log("Faltan datos");
        break;
      case "auth/missing-email":
        console.log("Falta correo");
        this.strError = "Hay un error en su correo electrónico o contraseña.";
        break;
      default:
        console.log("Error desconocido");
        this.strError = "Puede que falten campos por rellenar.";
        break;
    }
  }
}
