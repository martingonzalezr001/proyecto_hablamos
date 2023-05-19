import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { Usuario } from '../usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private firestore:AngularFirestore ) {

  }

  private  usuario$ = new Subject<any>();

  guardarUsuario(usuario:Usuario):Promise<any>
{
    return this.firestore.collection('usuarios').add(usuario);
  }
}
