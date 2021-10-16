import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { P404Component } from './componentes/p404/p404.component';
import { FormsModule } from '@angular/forms';
import { MensajeriaComponent } from './componentes/mensajeria/mensajeria.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CarruselComponent,
    FooterComponent,
    ContactenosComponent,
    P404Component,
    MensajeriaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
