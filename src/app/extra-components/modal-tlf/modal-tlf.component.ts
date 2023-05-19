import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Usuario } from 'src/app/usuarios';

@Component({
  selector: 'app-modal-tlf',
  templateUrl: './modal-tlf.component.html',
  styleUrls: ['./modal-tlf.component.css']
})
export class ModalTlfComponent {

  //Objetos de salida 
  @Output() cerrar = new EventEmitter<boolean>();
  
  //Objetos de entrada
  @Input() usuario:Usuario;

  guardar_tlf:FormGroup;
  constructor(private fb:FormBuilder, private newUser:UserServiceService) {
    this.guardar_tlf = this.fb.group({
      tlf:[''],
    })
   }

   guardarUsuario(){
    this.añadirTlf();
    console.log("usuario: ",this.usuario);
    this.cerrarModal();
    this.newUser.guardarUsuario(this.usuario).then(() =>{
      console.log(this.usuario);
      console.log("Usuario guardado");
    }).catch(error =>{
      console.log(error);
    }); 
   }

   añadirTlf(){
    this.usuario.telefono = this.guardar_tlf.value.tlf;
   }



  

  cerrarModal(){
    this.cerrar.emit(true);
  }

  

}
