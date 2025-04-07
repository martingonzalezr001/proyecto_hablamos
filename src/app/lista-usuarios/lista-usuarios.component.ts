import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Usuario } from '../usuarios';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  listaUsuarios:Usuario[] = [];

  notificacionAceptada:boolean = false

  constructor(private userService:UserServiceService, private route:Router){}

  ngOnInit():void{
    //this.listarUsuarios();
  }


  
 /*  listarUsuarios(){

    this.userService.listarUsuario().subscribe(res =>{
      console.log(res);
      this.listaUsuarios = [];
      res.forEach((element:any) => {
        this.listaUsuarios.push({
          uid: element.payload.doc.id,
          ...element.payload.data(),
        })
        
      });
      console.log(this.listaUsuarios);
    })
  } */
  abrirModal(){
    this.notificacionAceptada = true
  }

  cerrarModal(evento:boolean){
    this.notificacionAceptada = false;
  }

}
