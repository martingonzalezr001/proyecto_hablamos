import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Usuario } from '../usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registro_titulo = '¡Registrate!';
  ya_tienes_cuenta = '¿Ya tienes una cuenta?';
  iniciar_sesion = 'Iniciar sesión';
  nombre_ph = 'Nombre';
  apellidos_ph = 'Apellidos';
  email_ph = 'Correo electrónico';
  confirmar_password_ph = 'Confirmar contraseña';
  horario_ph = 'Horario de disponibilidad';
  estado_ph = 'Estado actual';
  contacto_ph = 'Forma de contactar';
  descripcion_ph = 'Añade una descripción...';
  foto_perfil = 'Foto de perfil';

  preguntar_tlf = '¿Te gustaría formar parte de nuestra comunidad ayudando a gente que necesita conversación o acompañamiento?';
  comenzar_btn = 'Comenzar';
  error_campos = 'Faltan campos por rellenar';
  
  
  
  
  ngOnInit(): void {
    
    this.succes_login = this.loginService.isValidEmail;
    setInterval(() => {
      this.succes_login = false
    },2000);
    console.log(this.loginService.email);
    console.log(this.loginService.password);
    console.log(this.loginService.uid);

    //Guardar datos del login anterior

    this.email = this.loginService.email;
    this.password = this.loginService.password;
    this.sobreescribirEmail();

    console.log(this.password);
    //console.log(this.registrar_usuario.value.password);


  

  }



  registrar_usuario: FormGroup;
  succes_login:boolean;

  //Variables de input
  email:string;
  password:string;
  //falta passord para compararlo con la que lo confirma


  //Variable inputs 
  camposRellenados:boolean = true;

  sobreescribirEmail(){
    const inputEmail = document.querySelector('#email');
    inputEmail?.setAttribute("value", this.loginService.email);
    inputEmail?.setAttribute("disabled", "true");
  }
  mirarPassword(){
    var passwd = document.getElementById("password");
     if(passwd?.getAttribute("type") == "password"){
      passwd.setAttribute("type", "text");
      }else{
        passwd?.setAttribute("type", "password");
      }
  }



  //Variables de select
  estado:string;
  forma_contactar:string;

  //Ceckbox tlf
  telefono_check:boolean = false;
  tlfModal:boolean = false;

  tlfModalAccepted:boolean = false;

  cambiar(){
    if(this.telefono_check){
      this.telefono_check = false;
    }else{
      this.telefono_check = true;
    }
    
  }

  //Modal tlf
  cerrarModal(evento:boolean){
    if(evento){
      this.tlfModal = false;
    }

  }
//Usuario
usuario:any;
  //telefono
  tlf:string;

 /*  agregarTlf(value:string){//Esta funcion guarda el numero de telefono pedido en el modal en la variable tlf
    console.log(value);
    this.tlf = value;
    this.tlfModalAccepted = true;
    if(this.tlfModalAccepted){
      this.tlfModal = false;
      this.registrar()
    }
    
    console.log("Heeey: " + this.tlf);
   // this.cerrarModal(true);
   // this.registrar();
  } */

  //Boton comenzar
  comenzar(){
    this.registrar_usuario.value.estado = this.estados[1];
    this.registrar_usuario.value.forma_contactar = this.forma_contactar[1];
    console.log( "Estado: " + this.registrar_usuario.value.estado + ".\nTipo de dato: " + this.registrar_usuario.value.estado.type);
    if(this.registrar_usuario.value.nombre == '' || this.registrar_usuario.value.apellidos == '' || this.registrar_usuario.value.horario_disponibilidad == '' || this.registrar_usuario.value.estado == undefined || this.registrar_usuario.value.forma_contactar == undefined){
      this.camposRellenados = false;
      return ;
    }

    if(this.camposRellenados == false){
      console.log("Faltan cositas");
    }

    this.usuario = {
      uid : this.loginService.uid,
      nombre : this.registrar_usuario.value.nombre,
      apellido : this.registrar_usuario.value.apellidos,
      correo : this.loginService.email,
   
      estado : this.estado,
      horario_disponibilidad : this.registrar_usuario.value.horario_disponibilidad,
      forma_contactar : this.forma_contactar,
      descripcion : this.registrar_usuario.value.descripcion,
      telefono : ''


     
    };

    if(this.tlf != null){
      this.usuario.telefono = this.tlf;
    }
   

    if(this.telefono_check){
      this.tlfModal = true;
    }else{
      this.newUser.guardarUsuario(this.usuario).then(() =>{
        console.log(this.usuario);
        console.log("Usuario guardado: " + this.usuario.uid);
        this.sendUid();
        this.router.navigate(['./perfil']);
        
      }).catch(error =>{
        switch(error.code){
          case 'Unsupported field value: undefined':
            
        }
      }); 
    }
  }

  sendUid(){
    const uid = this.loginService.uid;
    this.newUser.setUsuario(uid);
  }





position:number=0;

estados = [
  {id:1, name:"Disponible"},
  {id:2, name:"No disponible"},
  {id:3, name:"Ocupado"},
]

gadgets = [
  {id:4, name:"Teléfono"},
  {id:5, name:"Correo electronico"}
]

itemSelected(item:any){
  console.log(item);
  if(item.id < 3){
    this.estado = item.name;
  }else{
    this.forma_contactar = item.name;
  }
}


 
 
  constructor(private fb: FormBuilder, private loginService:LoginServiceService , private newUser:UserServiceService, private router:Router) {
    this.registrar_usuario = this.fb.group({
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      correo: [loginService.email,Validators.required],
      confirmar_contrasenia: ['',Validators.required],
      estado: ['',Validators.required],
      horario_disponibilidad: ['',Validators.required],
      forma_contactar: ['',Validators.required],
      descripcion: [''],
      telefono: ['']
    });

    this.loginService.isValidEmail;
    this.email = this.loginService.email;
    
   }


   //Control de errores, variables y el método.
   error_required_name:boolean = false;
   error_required_apellidos:boolean = false;
   error_same_password:boolean = false;
   error_required_horario:boolean = false;



   identificarError(){

    //Nombre
    if(this.registrar_usuario.get('nombre')?.hasError('required') && this.registrar_usuario.get('nombre')?.touched){
      this.nombre_ph = '';
      console.log("Nombre requerido");
      this.error_required_name = true;
    }else{
      this.nombre_ph = 'Nombre';
      this.error_required_name = false;
    }
    //Apellidos
    if(this.registrar_usuario.get('apellidos')?.hasError('required') && this.registrar_usuario.get('apellidos')?.touched){
      this.apellidos_ph = '';
      console.log("Apellidos requeridos");
      this.error_required_apellidos = true;

    }else{
      this.apellidos_ph = 'Apellidos';
      this.error_required_apellidos = false;
    }
    //Contraseña
    if(this.registrar_usuario.get('confirmar_contrasenia')?.hasError('required') && this.registrar_usuario.get('confirmar_contrasenia')?.touched && this.registrar_usuario.get('confirmar_contrasenia')){
      this.confirmar_password_ph = '';
      console.log("Contraseña requerida, tiene que ser igual que " + this.loginService.password);
      this.error_same_password = true;
    }else{
      this.confirmar_password_ph = 'Confirmar contraseña';
      this.error_same_password = false;
    }

    //Horario
    if(this.registrar_usuario.get('horario_disponibilidad')?.hasError('required') && this.registrar_usuario.get('horario_disponibilidad')?.touched){

      this.horario_ph = '';
      console.log("Horario inicial requerido");
      this.error_required_horario = true;
    }else{
      this.horario_ph = 'Horario de disponibilidad';
      this.error_required_horario = false;
    }
    

 /*    if(this.error_required_name){
      const nombre = this.registrar_usuario.get('nombre');
      
      
    }
    if(this.error_required_apellidos){
      const apellidos = this.registrar_usuario.get('apellidos');
    }

    if(this.error_same_password){
      const password = this.registrar_usuario.get('confirmar_contrasenia');
    }

    if(this.error_required_horario){
      const horario = this.registrar_usuario.get('horario_disponibilidad');
    } */
  }


  
}
