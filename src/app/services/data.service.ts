import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:AngularFirestore) { }

  editarDatosPerfil(uid:string, usuario:Usuario){

    return this.firestore.collection('usuarios').doc(uid).update(usuario);



  }
}
