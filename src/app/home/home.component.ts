import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'proyectoTFC';


learning:boolean = false;
cookiesAceptadas:boolean = false;
cookiesBannerCerrado:boolean = false;

constructor(private router:Router){
  window.onscroll = () => {
    this.scroll = window.scrollY;
  
  }
}


mostrarLearning(){
  this.learning = true;
  console.log("asd");
}


cerrarCookies(event:boolean){
this.cookiesBannerCerrado = true;
console.log(this.cookiesAceptadas);
}

aceptarCookies(event:boolean){
  this.cookiesAceptadas = true;
  console.log(this.cookiesAceptadas);
}

iniciarSesion(){
  console.log(this.cookiesAceptadas);
  if(this.cookiesAceptadas){
    this.router.navigate(['./login']);
  }else{
    this.cookiesBannerCerrado = false;
  }

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

