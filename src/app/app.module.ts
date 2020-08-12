import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {componenteInicio} from './Componentes/Inicio/inicio.component';
import {componenteProductos} from './Componentes/Productos/productos.component';
import {componenteVentas} from './Componentes/Ventas/ventas.component';
import {componenteProveedores} from './Componentes/Proveedores/proveedores.component';
import {componenteClientes} from './Componentes/Clientes/clientes.component';
import {componenteVendedores} from './Componentes/Vendedores/vendedores.component';

@NgModule({
  declarations: [
    AppComponent,
    componenteInicio,
    componenteProductos,
    componenteVentas,
    componenteProveedores,
    componenteClientes,
    componenteVendedores

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [componenteInicio, 
              componenteProductos,
              componenteVentas,
              componenteProveedores,
              componenteClientes,
              componenteVendedores
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
