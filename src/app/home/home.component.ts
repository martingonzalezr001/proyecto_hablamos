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

constructor(@Inject(DOCUMENT) private document:Document){
  
}

getImagePath(imageName: string): string {
  const basePath = this.document.baseURI;
  return `${basePath}assets/${imageName}`;
}
mostrarLearning(){
  this.learning = true;
  console.log("asd");
}



}

