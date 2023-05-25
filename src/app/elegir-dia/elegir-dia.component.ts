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
 @Output() enviarHorario:EventEmitter<string> = new EventEmitter<string>();
ngOnInit(): void {
}

  cerrarModal(){
    this.cerrar.emit(true);
  }
  lunes:boolean = false;
  martes:boolean = false;
  miercoles:boolean = false;
  jueves:boolean = false;
  viernes:boolean = false;
  sabado:boolean = false;
  domingo:boolean = false;

  dias:string[] = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  diasBool:boolean[] = [this.lunes,this.martes,this.miercoles,this.jueves,this.viernes,this.sabado,this.domingo];

 

  diasAñadidos:string[] = [];
  strAddDays:string = '';


  
  addDays(){
    for(let i = 0; i < this.dias.length; i++){
      if(this.diasBool[i]){
        console.log(this.dias[i])
        this.diasAñadidos.push(this.dias[i]);
        
      }
    }
    
    console.log("Dias añadidos: ",this.diasAñadidos);
    for(let j = 0 ; j < this.diasAñadidos.length; j++){
      if(j + 1 == this.diasAñadidos.length){
        this.strAddDays += this.diasAñadidos[j]  + " ";
      }else if(j + 2 == this.diasAñadidos.length){
        this.strAddDays += this.diasAñadidos[j]  + " y ";

      }else{
        this.strAddDays += this.diasAñadidos[j]  + ", ";
      }
    }
    console.log("Dias añadidos string: ",this.strAddDays);

    this.horarioFinal = this.strAddDays + "|" + this.horarioSeleccionado;

    console.log("Horario final: ",this.horarioFinal);

      this.enviarHorarioFinal(this.horarioFinal);
      console.log("Horario final enviado: ",this.horarioFinal, " dicho esto , se cierra modal");

      return this.horarioFinal;

  }

  enviarHorarioFinal(value:string){
    this.enviarHorario.emit(value);
    this.cerrar.emit(true);
  }





    //Generar horario final
    horarioFinal:string;

  
 
}
