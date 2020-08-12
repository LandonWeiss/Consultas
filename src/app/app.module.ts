import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {componenteInicio} from './Componentes/Inicio/inicio.component'
import {componenteProductos} from './Componentes/Productos/productos.component'

@NgModule({
  declarations: [
    AppComponent,
    componenteInicio,
    componenteProductos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [componenteInicio, componenteProductos],
  bootstrap: [AppComponent]
})
export class AppModule { }
