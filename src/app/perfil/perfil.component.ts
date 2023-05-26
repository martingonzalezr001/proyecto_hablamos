import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Subscription } from 'rxjs';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/compat/database';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  
  labelDescripcion = 'Descripción:';
  labelHorario = 'Horario:';
  labelEstado = 'Estado:';
  labelFormaContactar = 'Forma de contactar:';


  btnContactar = 'Contactar con alguien';
  btnCerrarSesion = 'Cerrar sesión';
  btnBorrarCuenta = 'Borrar cuenta';
  btnEditarHorario = 'Editar';
  btnEditarDescripcion = 'Editar';
  btnEditFoto = 'Cambiar foto de perfil';

  uid:string;
  private subscription:Subscription;
  constructor(private user:UserServiceService, private af:AngularFireDatabase) {
    this.subscription = this.user.dataUser$.subscribe(uid => {
      this.uid = uid;
    });
   }

  userParams:any[] = [];
  ngOnInit(): void {

    console.log("UID enviado: ",this.uid);
    this.af.list('/usuarios').valueChanges().subscribe(console.log);
    console.log(this.user.getInfoUser(this.uid).subscribe(snapshotChanges => {
      this.userParams = [];
      snapshotChanges.forEach(doc => {
        console.log(doc.id, '=>',doc.data());
        const data = doc.data() as any;

        const id = data.uid;
        const nombre = data.nombre;
        const apellidos = data.apellido;
        const correo = data.correo;
        const telefono = data.telefono
        const estado = data.estado;
        const forma_contactar = data.forma_contactar
        const horario_disponibilidad = data.horario_disponibilidad;
        const descripcion = data.descripcion;

        this.userParams.push(id,nombre,apellidos,correo,telefono,estado,forma_contactar,horario_disponibilidad,descripcion);

        console.log("userParams: ",this.userParams);

        console.log(this.contactar_perfil);
        console.log(this.estados_perfil);
      });
    })); 
  }

  estados_perfil = [
    {id:1, name:"Disponible"},
    {id:2, name:"No disponible"},
    {id:3, name:"Ocupado"},
  ]

  contactar_perfil = [
    {id:1, name:"Teléfono"},
    {id:2, name:"Correo electronico"},
  ]

    itemSelected(item:number){
      if(item === 5){

        switch(this.userParams[item]){
          case "Disponible":
            this.estados_perfil = [{id:1, name:this.userParams[item]},{id:2, name:"No disponible"},{id:3, name:"Ocupado"}];
            break;
          case "No disponible":
            this.estados_perfil = [{id:2, name:this.userParams[item]},{id:1, name:"Disponible"},{id:3, name:"Ocupado"}];
            break;
          case "Ocupado":
            this.estados_perfil = [{id:3, name:this.userParams[item]},{id:1, name:"Disponible"},{id:2, name:"No disponible"}];
            break;          
        }
      }
      
      if(item === 6){

        switch(this.userParams[item]){
          case "Teléfono":
            this.contactar_perfil = [{id:1, name:this.userParams[item]},{id:2, name:"Correo electronico"}];
            break;
          case "Correo electronico": 
            this.contactar_perfil = [{id:2, name:this.userParams[item]},{id:1, name:"Teléfono"}];
            break;
          } 


      }

        
    }
      /* switch(item.id){
        case item.id > 3:
          switch(this.userParams[6]){
            case "Teléfono":
              this.contactar_perfil = [{id:4, name:this.userParams[6]},{id:5, name:"Correo electronico"}];
              break;
            case "Correo electronico":
              this.contactar_perfil = [{id:5, name:this.userParams[6]},{id:4, name:"Teléfono"}];
              break;
      }
      break; 
      
      }
      */
    //modal delete
    modalDelete:boolean = false;

    deleteAccount(){
      this.modalDelete = true;
    }

      //editar horario
      editHorario: boolean = false;
      editHorarioBtn(){
        this.editHorario = !this.editHorario;
      }

      //Horario string
      recibirHorarioString(evento:string){
        console.log("Recibido: ",evento);
      }

      cerrarModal(evento:boolean){
        if(evento){
          this.editHorario = false;
        }
        if(evento){
          this.modalDelete = false;
        }

      }

      //editar descripcion

      descripcionEditada:boolean = false;
      nuevaDescripcion:string = "";
      editarDescripcion(){
        console.log("Editar descripcion");
        this.descripcionEditada = true;
        this.btnEditarDescripcion = 'Enviar';

      }

      enviarDescripcion(){
        this.userParams[8] = this.nuevaDescripcion;
        this.descripcionEditada = false;
        this.btnEditarDescripcion = 'Editar'
      }

}
