import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:AngularFirestore) { }

  /* editarDatosPerfil(uid:string, usuario:Usuario){
    const docUser = this.firestore.collection('usuarios', ref => ref.where('uid', '==', uid)).get();
    return docUser.update(usuario);



  } */

  editarData(id:string, usuario:string[]):Promise<any>{
    return this.firestore.collection('usuarios').doc(id).update(usuario);

  }
}
