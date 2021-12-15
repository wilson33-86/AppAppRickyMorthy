import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServicioService {

  constructor(private http: HttpClient) { }


  //Función para obtener los personajes
  getPersonajes(){ 
    return this.http.get('https://rickandmortyapi.com/api/character/');      
  }


  //Función para obtener los capitulos 
  getCapitulos(){
    return this.http.get('https://rickandmortyapi.com/api/episode/');
  }
 

  //Función para filtrar por personajes 
  getFiltroCapitulos( dato:string ){
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${ dato }`);
  }

  //Función para filtrar por capitulos
  getFiltroPersonajes( dato:string ){
    return this.http.get(`https://rickandmortyapi.com/api/episode/?name=${ dato }`);
  }

  //Función para obtener lista de personajes del enlace de capitulos
  getUrlPersonajesListado( url:string){
    return this.http.get(url);       
  }
}


