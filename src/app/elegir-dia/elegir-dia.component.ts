import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elegir-dia',
  templateUrl: './elegir-dia.component.html',
  styleUrls: ['./elegir-dia.component.css']
})
export class ElegirDiaComponent {
@Input() horarioSeleccionado: string;


 //Objetos de salida 
 @Output() cerrar = new EventEmitter<boolean>();
 @Output() enviarHorario:EventEmitter<string[]> = new EventEmitter<string[]>();
ngOnInit(): void {
}

  cerrarModal(){
    this.cerrar.emit(true);
  }

  dias:string[] = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  diasAñadidos:string[] = [];
  strDiasAñadidos:string = "";

  
  addDay(day:string){
    this.diasAñadidos.push(day);
    console.log("Dias añadidos: ",this.diasAñadidos);
  }

  toStringDays(){
    for(let i=0; i<this.diasAñadidos.length; i++){
      this.strDiasAñadidos += this.diasAñadidos[i] + " ";
      if(i + 1 == this.diasAñadidos.length){
        this.strDiasAñadidos += ".";
      }
    }
  }




    //Generar horario final
    horarioFinal:string[];

    generarHorarioFinal(){

      this.toStringDays();
      this.horarioFinal = [this.horarioSeleccionado, this.strDiasAñadidos];
      
      console.log("Horario final: ",this.horarioFinal);
      this.enviarHorario.emit(this.horarioFinal);
      return this.horarioFinal;
    }


 
}
