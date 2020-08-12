import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {componenteInicio} from 'src/app/Componentes/Inicio/inicio.component';
import {componenteProductos} from './Componentes/Productos/productos.component';
import {componenteVentas} from './Componentes/Ventas/ventas.component';
import {componenteProveedores} from './Componentes/Proveedores/proveedores.component';
import {componenteClientes} from './Componentes/Clientes/clientes.component';
import {componenteVendedores} from './Componentes/Vendedores/vendedores.component';
const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: componenteInicio},
  {path: 'productos', component: componenteProductos},
  {path: 'proveedores', component: componenteProveedores},
  {path: 'clientes', component: componenteClientes},
  {path: 'vendedores', component: componenteVendedores},
  {path: 'ventas', component: componenteVentas}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
