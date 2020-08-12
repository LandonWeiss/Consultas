import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {componenteInicio} from 'src/app/Componentes/Inicio/inicio.component';
import {componenteProductos} from './Componentes/Productos/productos.component'

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: componenteInicio},
  {path: 'productos', component: componenteProductos}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
