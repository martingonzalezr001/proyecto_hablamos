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
  @Output() horarioString:EventEmitter<string> = new EventEmitter<string>();

  cerrarModal(){
    console.log("Cerrando modal");
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
  }

  cerrarModal2(evento:boolean){
    if(evento){
      this.nuevoHorario = false;
    }
  }

  //Recibe horario final
  horarioFinalNuevo:string;
  horarioNuevoRecibido:boolean = false;
  arHorarioNuevo:string[] = [];
  recibeHorarioNuevo(horarioNuevo:string){
    this.horarioNuevoRecibido = true;
    console.log("Horario recibido...");
    console.log("Horario nuevo ->", horarioNuevo);

    this.horarioFinalNuevo = horarioNuevo;
    console.log(this.horarioFinalNuevo);


    this.arHorarioNuevo = horarioNuevo.split("|");
    this.horariosDisponibles.push(this.arHorarioNuevo);

    this.horarioToString();

    
  }


  //Transforma el horario en string para qur se muestre en el perfil
  strHorario:string = '';
  horarioToString(){
    
    for(let i = 0; i < this.horariosDisponibles.length; i++){
      for(let j = 0; j< this.horariosDisponibles[i].length; j++){
        if(j == 0){
          this.strHorario += this.horariosDisponibles[i][j] + " ";
        }else{
          this.strHorario += this.horariosDisponibles[i][j] + " | ";
        }
      }
    }

    console.log("Horario en string: ",this.strHorario);
    this.horarioString.emit(this.strHorario);
    return ;
  }

}
