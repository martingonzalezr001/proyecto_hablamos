import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-horario-edit',
  templateUrl: './horario-edit.component.html',
  styleUrls: ['./horario-edit.component.css']
})
export class HorarioEditComponent {

  ngOnInit(): void {

    
  }

  //Objetos de salida 
  @Output() cerrar = new EventEmitter<boolean>();

  cerrarModal(){
    this.cerrar.emit(true);
  }

  horariosDisponibles:any[][] = [['Lunes y Martes','8:00 - 12:00'],
                          ['Miercoles y Jueves','8:00 - 12:00'],
                          ['Viernes y Sabado','12:00 - 18:00']
                        ];

  horarioVacio:boolean = false;
  

  nuevoHorario:boolean = false;



  addHorarioDisponible(){
    this.nuevoHorario = true;

  }


  borrarHorarioDisponible(i:number){
    this.horariosDisponibles.splice(i, 1);

    if(this.horariosDisponibles.length == 0){
      this.horarioVacio = true;
      console.log(this.horarioVacio);
    }

  }

  cerrarModal2(evento:boolean){
    if(evento){
      this.nuevoHorario = false;
    }
  }

  //Recibe horario final

  recibeHorarioNuevo(horarioNuevo:string[]){
    console.log(horarioNuevo)
    this.horariosDisponibles.push(horarioNuevo);
    this.horarioVacio = false;
    this.nuevoHorario = false;
  }

}
