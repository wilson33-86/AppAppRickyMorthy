import { Component, OnInit } from '@angular/core';
import { capitulosNUPL, personajesNUPL } from '../interfaces/interfaces';
import { RestServicioService } from 'src/app/servicios/rest-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {
  listadoCapitulos: capitulosNUPL[] = [];
  url!:string;
  constructor(private Capitulos: RestServicioService, 
    private router : Router) {
     this.Capitulos.getCapitulos().subscribe((datosCapitulos:any)=>{
       this.listadoCapitulos = datosCapitulos.results;
       this.setUrlCapitulos();
     });

     }
     setUrlCapitulos(){
      for ( let i = 0; i < this.listadoCapitulos.length; i++ ) {
        const NombrePersonajes = this.listadoCapitulos[i];
        let  urlPersonajes = NombrePersonajes.characters
        NombrePersonajes.personajes = [];
  
        for (let j = 0; j < urlPersonajes.length; j++) {
          const urlp = urlPersonajes[j];
          let personaje = { url:urlp,name:"" };
  
            this.Capitulos.getUrlPersonajesListado( urlp )
            .subscribe(( result:any )=> {
              personaje.name = result.name;
            });
            NombrePersonajes.personajes.push( personaje );
        }
      }
     }
  // Función para filtrar busqueda por capitulos
     setUrlBuscarCapitulos( dato: string ){
      this.Capitulos.getFiltroPersonajes( dato )
        .subscribe( ( data: any ) => {
          this.listadoCapitulos = data.results;
          this.setUrlCapitulos();
        });    
    } 
  
    verCapitulos( item : personajesNUPL){
      let url=item.url;
      this.router.navigate(['/personaje',url.split('/')[5]]);
    }

  ngOnInit(): void {
  }

}
