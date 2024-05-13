import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { PartesDeArribaComponent } from './pages/partes-de-arriba/partes-de-arriba.component';
import { PartesDeAbajoComponent } from './pages/partes-de-abajo/partes-de-abajo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    ProductoComponent,
    PartesDeArribaComponent,
    PartesDeAbajoComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
