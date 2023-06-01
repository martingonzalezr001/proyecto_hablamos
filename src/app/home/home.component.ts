import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'proyectoTFC';


learning:boolean = false;

constructor(){
  window.onscroll = () => {
    this.scroll = window.scrollY;
  
  }
}


mostrarLearning(){
  this.learning = true;
  console.log("asd");
}

goTop(){
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
}

scroll:number = 0;



}

