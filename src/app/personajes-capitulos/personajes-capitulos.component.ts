import { Component, OnInit } from '@angular/core';
import { personajesNUCL, capitulosNUCL } from '../interfaces/interfaces';
import { RestServicioService } from 'src/app/servicios/rest-servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes-capitulos',
  templateUrl: './personajes-capitulos.component.html',
  styleUrls: ['./personajes-capitulos.component.css']
})
export class PersonajesCapitulosComponent implements OnInit {
  personaje!: personajesNUCL;
  url!:string;
  capitulos!:capitulosNUCL[];
  constructor(private CapitulosApi: RestServicioService, 
    private router : ActivatedRoute) {
      this.router.paramMap.subscribe( (parm:any)=>{
        const {params} = parm
        let id = params.id;
        this.setUrl(id);    
    });
    this.getPersonaje();
  }

  getPersonaje(){
    this.CapitulosApi.getUrlPersonajesListado( this.url )
    .subscribe(( result:any )=> {
      this.personaje = result;
      this.setNombreUrlPersonajes();
    });
  }

  setNombreUrlPersonajes(){
       
    let  urlCapitulos = this.personaje.episode;
    this.personaje.capitulos = [];

    for (let j = 0; j < urlCapitulos.length; j++) {  
      const urlc = urlCapitulos[j];
      let capitulo = { url:urlc,name:"" };

      this.CapitulosApi.getUrlPersonajesListado( urlc )
        .subscribe(( result:any )=> {
           capitulo.name = result.name;
      });
        this.personaje.capitulos.push( capitulo );
    }
     this.capitulos = this.personaje.capitulos;   
  }
  setUrl( id:string ){
    this.url=` https://rickandmortyapi.com/api/character/${ id }`;
  }  
  ngOnInit(): void {
  }

}
