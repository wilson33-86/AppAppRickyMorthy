
import { CapitulosComponent } from './capitulos/capitulos.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesCapitulosComponent } from './personajes-capitulos/personajes-capitulos.component';

const routes: Routes = [
  {path:'capitulos', component:CapitulosComponent},
 {path:'personajes', component:PersonajesComponent},
 {path:'personaje/:id',component:PersonajesCapitulosComponent},
 { path: '', pathMatch: 'full', redirectTo: 'personajes' },
 { path: '**', pathMatch: 'full', redirectTo: 'personajes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
