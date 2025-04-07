import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proyectoTFC';


  ngOnInit(): void {

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA0LYfinU0AKVOVhCSfm6bPb6UcH0sCEQA",
      authDomain: "proyectohablamos.firebaseapp.com",
    });

  
  }

}
