import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {componenteInicio} from 'src/app/Componentes/Inicio/inicio.component'

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: componenteInicio}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
