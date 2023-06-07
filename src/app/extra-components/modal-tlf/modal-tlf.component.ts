import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Usuario } from 'src/app/usuarios';

@Component({
  selector: 'app-modal-tlf',
  templateUrl: './modal-tlf.component.html',
  styleUrls: ['./modal-tlf.component.css']
})
export class ModalTlfComponent {

  strUid:string;

  //Objetos de salida 
  @Output() cerrar = new EventEmitter<boolean>();
  
  //Objetos de entrada
  @Input() usuario:Usuario;

  guardar_tlf:FormGroup;
  constructor(private fb:FormBuilder, private newUser:UserServiceService, private router:Router, private localStorage:LocalStorageService) {
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
      this.sendUid();
      this.router.navigate(['./perfil']);
      this.strUid = this.usuario.uid;
        this.localStorage.setItem('uid',this.strUid);

    }).catch(error =>{
      console.log(error);
    }); 
   }

   añadirTlf(){
    this.usuario.telefono = this.guardar_tlf.value.tlf;
   }

   sendUid(){
    console.log("usuario: ",this.usuario);
    console.log("usuario ID : ", this.usuario.uid);
    const uid = this.usuario.uid;
    console.log(" sin mandar: ",uid);
    this.newUser.setUsuario(uid);
    console.log("El usuario con el uid: ",uid," ha sido enviado");
    
    
   }



  

  cerrarModal(){
    this.cerrar.emit(true);
  }

  

}
