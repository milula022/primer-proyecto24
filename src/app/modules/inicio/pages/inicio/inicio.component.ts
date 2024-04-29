import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publica-tipo array
  public info: Ropa[];
  constructor() {
    this.info = [
      {
        id: "",
        imagen: "https://www.neo2.com/wp-content/uploads/2021/08/stussy-fall-2021-coleccion-streetwear-nuevo-lanzamiento-otono-27.jpg",
        alt:"Hoodie stussy",
        nombre: "hoodie topx",
        marca: "stussy",
        precio: 6789,
      },
      {
        id: "",
        imagen: "https://acdn.mitiendanube.com/stores/953/334/products/20230202_1447391-bc0b0bdad9a93253cb16761600893513-1024-1024.jpg",
        alt:"Remera stussy",
        nombre: "Remera vid",
        marca: "stussy",
        precio: 1234,
      },
      {
        id: "",
        imagen: "https://www.stussy.com/cdn/shop/products/116651_WABL_3.jpg?v=1707427047&width=480",
        alt:"Pantalon stussy",
        nombre: "Pantalon cbd",
        marca: "stussy",
        precio: 4567,

      }
    ]
  }

}
