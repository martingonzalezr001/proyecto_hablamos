import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


contactar = document.getElementById("forma_contactar") as HTMLSelectElement;
  registrar_usuario!: FormGroup;
valor = this.contactar?.value ;

contactarDefault:string = "Teléfono";
formasContactar:string[]  = ["Teléfono","Correo electronico"];
position:number=0;

changeValue(ngForm:NgForm | FormGroupDirective){
  this.valor = ngForm.value;
  console.log(this.valor);
}

 
 
  constructor(private fb: FormBuilder) {
    this.registrar_usuario = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      correo: ['',Validators.required],
      contrasenia: ['',Validators.required],
      confirmar_contrasenia: ['',Validators.required],
      estado: ['',Validators.required],
      forma_contactar: ['',Validators.required],
      descripcion: ['',Validators.required],
    });
   }


   registrar(){
    const nombre = this.registrar_usuario.value.nombre;
    const apellido = this.registrar_usuario.value.apellido;
    const correo = this.registrar_usuario.value.correo;
    const contrasenia = this.registrar_usuario.value.contrasenia;
    const confirmar_contrasenia = this.registrar_usuario.value.confirmar_contrasenia;
    const estado = this.registrar_usuario.value.estado;
    const forma_contactar = this.registrar_usuario.value.forma_contactar;
    const descripcion = this.registrar_usuario.value.descripcion;
   }
}
