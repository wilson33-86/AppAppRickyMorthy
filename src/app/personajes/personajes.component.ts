import { Component, OnInit } from '@angular/core';
import { personajesNUCL } from '../interfaces/interfaces';
import { RestServicioService } from 'src/app/servicios/rest-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  listadoPersonajes: personajesNUCL[] = [];
  constructor(private Personajes: RestServicioService, 
       private router : Router ) { 
         this.Personajes.getPersonajes().subscribe((datosPersonajes:any)=>{
           this.listadoPersonajes = datosPersonajes.results;
           this.setUrlPersonajes();
         });
       }
       setUrlPersonajes(){
        for ( let i = 0; i < this.listadoPersonajes.length; i++ ) {
          const NombreCapitulos = this.listadoPersonajes[i];
          let  urlCapitulos = NombreCapitulos.episode;
          NombreCapitulos.capitulos = [];
    
          for (let j = 0; j < urlCapitulos.length; j++) {
            const urlc = urlCapitulos[j];
            let capitulo = { url:urlc,name:"" };
            this.Personajes.getUrlPersonajesListado(urlc)
              .subscribe((result:any)=> {
              capitulo.name = result.name;
            });  
            NombreCapitulos.capitulos.push(capitulo);
          }
        } 
      }
    
      verCapitulos( item : personajesNUCL ){
        this.router.navigate(['/personaje',item.id]);
      }
    
      // Función para filtrar busqueda por personajes
    
      setUrlbuscarPersonajes( dato: string ){
        this.Personajes.getFiltroCapitulos( dato )
          .subscribe( ( data: any ) => {
            this.listadoPersonajes = data.results;
          });
      }
  ngOnInit(): void {
  }

}
