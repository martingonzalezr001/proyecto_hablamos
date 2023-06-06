import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../usuarios';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-modal-delete-account',
  templateUrl: './modal-delete-account.component.html',
  styleUrls: ['./modal-delete-account.component.css']
})
export class ModalDeleteAccountComponent {

//Objetos de entrada
@Input() uid:string;
@Input() delete:boolean
@Input() signOut:boolean

  //Objetos de salida 
@Output() cerrar = new EventEmitter<boolean>();

constructor(private userService:UserServiceService, private router:Router, private loginService:LoginServiceService) { }



ngOnInit(): void {
  console.log("UID recibido: ",this.uid);
  
}

  cerrarModal() {
    this.cerrar.emit(true);
    console.log("aaa");
  }
  eliminarCuenta() {
    console.log("Eliminando cuenta...");
      this.userService.deleteUsuario(this.uid).then(() => {
      this.loginService.borrarUsuarioAuth();
      console.log("Usuario eliminado correctamente");
      this.cerrarModal();
      this.router.navigate(['/login']);

    });

  }


  cerrarSesion(){
    this.loginService.cerrarSesionAuth();
  }

}
