import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Subscription } from 'rxjs';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/compat/database';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  uid:string;
  private subscription:Subscription;
  constructor(private user:UserServiceService, private af:AngularFireDatabase) {
    this.subscription = this.user.dataUser$.subscribe(uid => {
      this.uid = uid;
    });
   }

  userParams:any[] = [];
  ngOnInit(): void {

    console.log("UID enviado: ",this.uid);
    this.af.list('/usuarios').valueChanges().subscribe(console.log);
    console.log(this.user.getInfoUser(this.uid).subscribe(snapshotChanges => {
      this.userParams = [];
      snapshotChanges.forEach(doc => {
        console.log(doc.id, '=>',doc.data());
        const data = doc.data() as any;

        const id = data.uid;
        const nombre = data.nombre;
        const apellidos = data.apellido;
        const correo = data.correo;
        const telefono = data.telefono
        const estado = data.estado;
        const forma_contactar = data.forma_contactar;
        const horario_disponibilidad = data.horario_disponibilidad;
        const descripcion = data.descripcion;

        this.userParams.push(id,nombre,apellidos,correo,telefono,estado,forma_contactar,horario_disponibilidad,descripcion);

        console.log("userParams: ",this.userParams);
      });
    })); 
  }

  estados_perfil = [
    {id:1, name:"Disponible"},
    {id:2, name:"No disponible"},
    {id:3, name:"Ocupado"},
  ]

  itemSelected(item:any){

  }
}
