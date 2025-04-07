import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:AngularFirestore) { }

  /* editarDatosPerfil(uid:string, usuario:Usuario){
    const docUser = this.firestore.collection('usuarios', ref => ref.where('uid', '==', uid)).get();
    return docUser.update(usuario);



  } 

  editarData(id:string, usuario:string[]):Promise<any>{
    return this.firestore.collection('usuarios').doc(id).update(usuario);

  }
  */
  updateData(uid: string, newData: string[] | any[]): Promise<void> {
    const batch = this.firestore.firestore.batch();

    const dataAActualizar:{ [key: string]: any } = {};
        const campos:{ [key: string]: any } = {apellido:newData[2], correo:newData[3], descripcion:newData[8], estado:newData[5], forma_contactar:newData[6], horario_disponibilidad:newData[7], nombre:newData[1], telefono:newData[4], uid:newData[0]};
        console.log("Campos a actualizar: ",campos);
        Object.keys(campos).forEach(campo=> {
          dataAActualizar[campo] = campos[campo];
        });

    return this.firestore.collection('usuarios', ref => ref.where('uid', '==', uid))
    .get()
    .toPromise()
    .then(querySnapshot => {
      querySnapshot?.docs.forEach(doc => {

        const docRef = this.firestore.collection('usuarios').doc(doc.id).ref;
        return docRef.update(dataAActualizar);
        
      });
    }).then(() => {
      console.log("Datos actualizados correctamente");
    })
    .catch(error => {
      console.log("No se han podido actualizar los datos. " + error);
    });
  }

}
