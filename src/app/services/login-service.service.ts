import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(@Inject(DOCUMENT) private document:Document, private router:Router, private afAuth:AngularFireAuth,private cookies:CookieService) {
    
   }

  token:string | undefined;


  uid:string | undefined;
  email:string;
  password:string;

  nombreCookie:string;


  //Errors login
  errorPasswordLength:boolean = false;
  errorInvalidEmail:boolean = false;
  errorEmailAlreadyInUse:boolean =false;
  
  strError:string;

  isValidEmail:boolean = false;

  
  

   /* login(email:string, password:string){


    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.router.navigate(['./registro']);
          }
        )
      }).catch(err=>{
        this.controlarError(err.code);
        console.log(err);
      });


  }

  controlarError(code:string ){
    switch(code){
      case "auth/invalid-email":
        // console.log("El email introducido no es válido");
        this.errorInvalidEmail = true;
        return this.errorInvalidEmail;
      case "auth/email-already-in-use":
        // console.log("El email introducido ya está en uso");
        this.errorEmailAlreadyInUse = true;
        return this.errorEmailAlreadyInUse;
      case "auth/weak-password":
        // console.log("La contraseña introducida es demasiado débil");
        this.errorPasswordLength = true;
        return this.errorPasswordLength;

        default:
        // console.log("Error desconocido");
        this.isValidEmail = false;
        return  this.isValidEmail;
    }
  } */


  async login(email: string, password: string) {
    try {
      const response = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log(response);
      const uid = response.user?.uid;

      //Info del usuario a crear
      this.uid = uid;
      this.email = email;
      this.password = password;

      
      console.log(uid);
     // this.token = await this.afAuth.currentUser?.getIdToken();
      this.isValidEmail = true;
      
      this.cookies.set('cookie ' + uid, email  );
      console.log("Cookie creada: ", this.cookies.get('cookie ' + this.uid));
      localStorage.setItem('cookie ' + this.uid , email);
      this.router.navigate(['./registro']);
    } catch (error:any) {

      console.log(error.code);
      this.strError = error.code;
      this.controlarError(error.code);
    }
  }

  async signIn(email: string, password: string) {

    const response = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log(response);
      const uid = response.user?.uid;

      this.uid = uid;
      this.email = email;
      this.password = password;

      
      console.log(uid);
     // this.token = await this.afAuth.currentUser?.getIdToken();
      this.isValidEmail = true;
      
      this.cookies.set('cookie ' + this.uid, email);
      console.log("Cookie creada: ", this.cookies.get('cookie ' + this.uid));
      localStorage.setItem('cookie ' + this.uid , email);
      this.router.navigate(['./profile']);
    } catch (error:any) {

      console.log(error.code);
      this.strError = error.code;
      //this.controlarError(error.code);

  }

  
  
  controlarError(code: string) {
    switch (code) {
      case "auth/invalid-email":
        this.errorInvalidEmail = true;
        return this.errorInvalidEmail;
      case "auth/email-already-in-use":
        this.errorEmailAlreadyInUse = true;
        return this.errorEmailAlreadyInUse;
      case "auth/weak-password":
        this.errorPasswordLength = true;
        return this.errorPasswordLength;
      default:
        this.isValidEmail = false;
        return this.isValidEmail;
    }
  }

  controlarErrorSignIn(code: string) {
    switch (code) {
      case "auth/invalid-email":
        this.errorInvalidEmail = true;
        return this.errorInvalidEmail;
      case "auth/user-not-found":
        this.errorInvalidEmail = true;
        return this.errorInvalidEmail;
      case "auth/wrong-password":
        this.errorInvalidEmail = true;
        return this.errorInvalidEmail;
      default:
        this.isValidEmail = false;
        return this.isValidEmail;
    }
  }

borrarUsuarioAuth(){
  firebase.auth().currentUser?.delete().then(()=>{

    console.log("Usuario eliminado correctamente del auth");
  }).catch(err=>{console.log(err)});
}

cerrarSesionAuth(){
  return this.afAuth.signOut().then(()=>{
    localStorage.removeItem('uid');
    
    this.nombreCookie = 'cookie ' + this.uid;

    console.log("Nombre de la cookie: " + this.nombreCookie );
    this.cookies.deleteAll();
    this.router.navigate(['./']);
  }

  );
}
  
  

  getIdToken(){
    return this.token;
  }

}
