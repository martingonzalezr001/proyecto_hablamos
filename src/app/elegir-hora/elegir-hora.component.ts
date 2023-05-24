import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elegir-hora',
  templateUrl: './elegir-hora.component.html',
  styleUrls: ['./elegir-hora.component.css']
})
export class ElegirHoraComponent {

   //Objetos de salida 
   @Output() cerrar = new EventEmitter<boolean>();

   cerrarModal(){
     this.cerrar.emit(true);
   }

   horas:string[] = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00', '20:00','21:00','22:00','23:00','00:00'];

   //Seleccionar hora

   indiceInicioSeleccionado: number = -1;
   indiceFinSeleccionado: number = -1;

   horarioTotalSeleccionado: string;


   horaInicioSeleccionada: string = "";
   horaFinSeleccionada: string = "";

   seleccionarHoraInicio(hora:number){
    this.indiceInicioSeleccionado = hora;

    this.horaInicioSeleccionada = this.horas[this.indiceInicioSeleccionado];

    console.log("Hora seleccionada inicio: ",this.horaInicioSeleccionada);
    
   }

   seleccionarHoraFin(hora:number){
    this.indiceFinSeleccionado = hora;

    this.horaFinSeleccionada = this.horas[this.indiceFinSeleccionado];

    console.log("Hora seleccionada fin: ",this.horaFinSeleccionada);
    
   }


   horarioSeleccionado(){
    this.horarioTotalSeleccionado = this.horaInicioSeleccionada + " - " + this.horaFinSeleccionada;
    console.log("Horario seleccionado: ",this.horarioTotalSeleccionado);
    this.enviarHorarioSeleccionado();
    return this.horarioTotalSeleccionado;

   }


    //Enviar horario seleccionado
    enviarHorarioSeleccionado(){
      //this.cerrarModal();
      this.elegirDia = true;

    }

    elegirDia:boolean = false;
}
