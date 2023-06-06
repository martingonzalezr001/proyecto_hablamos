import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Subscription } from 'rxjs';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/compat/database';
import { Usuario } from '../usuarios';
import { LocalStorageService } from '../services/local-storage.service';
import { DataService } from '../services/data.service';

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

//Variables Estados
disponible:boolean = false;
ocupado:boolean = false;
no_disponible:boolean = false; 

  user_id:any
  uid:string;
  strUid:string;
  private subscription:Subscription;
  constructor(private user:UserServiceService, private af:AngularFireDatabase, private localStorage:LocalStorageService, private dataService:DataService) {
    this.subscription = this.user.dataUser$.subscribe(uid => {
      this.uid = uid;
    });

    const userInfo = localStorage.getItem('userInfo');
    console.log("user: ", userInfo);
    if(userInfo){
      for(let i = 0; i < this.userParams.length; i++){
        this.userParams[i] = JSON.stringify(userInfo);
        console.log("userParams: ",this.userParams);
        this.userParam = JSON.stringify(this.userParams);
        this.userParams.push(this.userParam);      }
      
    }
  }
  userParam:string;
  userParams:string[] | any = [];
  localData:any[] = [];
  ngOnInit(): void {
    //this.strUid = this.uid.toString();
    const stringUid = this.localStorage.getItem('uid');
    console.log("UID recuperado: ",stringUid);
    console.log(" tipo: ",typeof stringUid);
    if(stringUid && typeof stringUid === 'string'){
      console.log(":::::::");
     
    }
    this.af.list('/usuarios').valueChanges().subscribe(console.log);
    console.log("-----> ");
    console.log(this.user.getInfoUser(stringUid).subscribe(snapshotChanges => {
      this.userParams = [];
      this.localData = {} as any;
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
        
        
        console.log('UserParams: ',this.userParams);

        
      
                  console.log("LocalData: " + this.localData);
                  
        
    
        console.log("Datos guardados en localStorage: ",localStorage.getItem('userInfo')); 
        const datosRecuperadosJson = localStorage.getItem('userInfo');  //Recupera la info del localStorage
        let datosRecuperados;
    
        if(datosRecuperadosJson != null){
          datosRecuperados = JSON.parse(datosRecuperadosJson); 
          console.log("Datos recuperados del localStorage: ",datosRecuperados);
          this.localData.push(datosRecuperados);
        }else{
          console.log("No hay datos en el localStorage");
          datosRecuperados = [];
        }
       
       
       
      });
    }));


    setTimeout(() =>{
      if(this.userParams != undefined){

      
        console.log("Parametros de usuario: " + this.userParams);
        console.log("Estado: ", this.userParams[5]);
          if(this.userParams[5] == "Disponible"){
            this.itemSelected(5, "Disponible");
          }else if(this.userParams[5] == "No disponible"){
            this.itemSelected(5, "No disponible");
            console.log('____________________________________________________________');
          }else if(this.userParams[5] == "Ocupado"){
            this.itemSelected(5, "Ocupado");

          }

      }else{
        console.log("no llega");
      }
    }, 2000
        );
      
   
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
  name:string;
  subItem:number
    itemSelected(item:number, name:string){
      if(item === 5){
      //  console.log("Item: ",this.estados_perfil.values);
      //  console.log("Selected:", this.userParams[5].name );
      if(name === undefined){
        name = this.userParams[5].name;
      
      }
        switch(name){
          case "Disponible":
            this.estados_perfil = [{id:2, name:"No disponible"},{id:3, name:"Ocupado"}];


            this.disponible = true;
            this.no_disponible = false;
            this.ocupado = false;
            console.log(this.disponible," ", this.no_disponible, " ", this.ocupado);
            this.userParams[5] = "Disponible";
            console.log(this.userParams);
            this.dataService.editarData(this.uid, this.userParams);

            break;
          case "No disponible":
            this.estados_perfil = [{id:1, name:"Disponible"},{id:3, name:"Ocupado"}];
            this.no_disponible = true;
            this.disponible = false;
            this.ocupado = false;
            console.log(this.disponible," ", this.no_disponible, " ", this.ocupado);
            this.userParams[5] = "No disponible";
            console.log(this.userParams);
            
            break;
          case "Ocupado":
            this.estados_perfil = [{id:1, name:"Disponible"},{id:2, name:"No disponible"}];
            this.ocupado = true;
            this.disponible = false;
            this.no_disponible = false;
            console.log(this.disponible," ", this.no_disponible, " ", this.ocupado);
            this.userParams[5] = "Ocupado";
            console.log(this.userParams)

            break;     
        }
      }
      
      if(item === 6){

        switch(this.userParams[item]){
          case "Teléfono":
            this.contactar_perfil = [{id:1, name:this.userParams[item]},{id:2, name:"Correo electronico"}];
            this.userParams[6] = "Telefono";
            break;
          case "Correo electronico": 
            this.contactar_perfil = [{id:2, name:this.userParams[item]},{id:1, name:"Teléfono"}];
            this.userParams[6] = "Correo electronico"
            break;
          } 


      }


      console.log("UserParams: ",this.userParams);
      console.log("Local data: ",this.localData);

        
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
    modalSignOut:boolean = false;

    deleteAccount(){
      this.modalDelete = true;
      this.modalSignOut = false;

    }

    signOutAccount(){
      this.modalSignOut = true;
      this.modalDelete = false;

    }

      //editar horario
      editHorario: boolean = false;
      editHorarioBtn(){
        this.editHorario = !this.editHorario;
      }

      //Horario string
      recibirHorarioString(evento:string){
        console.log("Recibido: ",evento);
        this.userParams[7] = evento;
        console.log(this.userParams);
      }

      mostrarDatos(){
        console.log(this.userParams);
      }

      cerrarModal(evento:boolean){
        if(evento){
          this.editHorario = false;
        }
        if(evento){
          this.modalDelete = false;
        }
        if(evento){
          this.modalSignOut = false;
        }

      }

      //editar descripcion

      descripcionEditada:boolean = false;
      nuevaDescripcion:string = "";
      editarDescripcion(){
        console.log("Editar descripcion");
        this.descripcionEditada = true;
        this.btnEditarDescripcion = 'Guardar';

      }

      enviarDescripcion(){
        this.userParams[8] = this.nuevaDescripcion;
        console.log(this.userParams);
        this.descripcionEditada = false;
        this.btnEditarDescripcion = 'Editar'
      }

}
