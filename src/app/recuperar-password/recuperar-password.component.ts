import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {
  
  recuperar_contrasenia = 'Recuperar contraseña';
  correo_electronico = 'Correo electrónico';
  enviar = 'Enviar correo para recuperar contraseña';
  recuperar_desicripcion = 'Escribe el correo electrónico que utilizaste para registrarte y te enviaremos un correo con un enlace para recuperar tu contraseña';
  enviar_btn = 'Enviar a mi correo';


  recuperar:FormGroup;
  correo:string = ''

  constructor(private fb:FormBuilder,private af:AngularFireAuth) {
    this.recuperar = this.fb.group({
      correo: ['', Validators.required],
    });
   }

  recuperar_contrasenia_func(){

    const correo = this.recuperar.value.correo;
    console.log(correo);
    this.af.sendPasswordResetEmail(correo).then(()=>{}).catch(()=>{});
  }

}
