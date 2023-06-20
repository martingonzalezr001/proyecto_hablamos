import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Usuario } from '../usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private firestore:AngularFirestore ) {

  }

 // private  usuario$ = new Subject<any>();

  private dataUser = new BehaviorSubject<any>(null);
  public dataUser$ = this.dataUser.asObservable();

  setUsuario(uid:any){
    this.dataUser.next(uid);
  }

  guardarUsuario(usuario:Usuario):Promise<any>
{
    return this.firestore.collection('usuarios').add(usuario);
  }

  getInfoUser(uid:any){
    console.log("UID cuyo usuario se muestran sus datos: ",uid);
    
    return this.firestore.collection('usuarios', ref => ref.where('uid', '==', uid)).get();
  }

  deleteUsuario(id:string):Promise<any>{

    return this.firestore.collection('usuarios').doc(id).delete();//Borra el usuario con el id que se le pasa por parametro

  }


  listarUsuario(): Observable<any>{
    return this.firestore.collection('usuarios').snapshotChanges();

  }
}


