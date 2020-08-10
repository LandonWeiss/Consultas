import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {componenteInicio} from './Componentes/Inicio/inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    componenteInicio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [componenteInicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
