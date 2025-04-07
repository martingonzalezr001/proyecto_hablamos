import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key:string, data:string){
    try{

      localStorage.setItem(key,JSON.stringify(data));

    }catch(error){
      console.log(error);
    }
  }

  getItem(key:string){
    try{
        const valor = localStorage.getItem(key);
        return valor ? JSON.parse(valor) : null;
        
    }catch(error){
      console.log(error);
      return error;
    }
  }

  removeItem(key:string):void{
    try{
      localStorage.removeItem(key);
    }catch(error){
      console.log(error);
    }
  }

  clear():void{
    try{
    localStorage.clear();
    }catch(error){
      console.log(error);}
  }
}
