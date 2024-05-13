import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { PartesDeArribaComponent } from './pages/partes-de-arriba/partes-de-arriba.component';
import { PartesDeAbajoComponent } from './pages/partes-de-abajo/partes-de-abajo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"partes-de-arriba",component:PartesDeArribaComponent
  },
  {
    path:"partes-de-abajo",component:PartesDeAbajoComponent
  },
  {
    path:"contacto",component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
