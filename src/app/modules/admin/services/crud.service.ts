import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos coleccion para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }
  //crear productos
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        //asignamos ID creado al atributo idProducto sw la interfaz Producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      } catch (error) {
        reject(error);
      }
    })
  }

  //obtener producto
  //editar producto
  //eliminar producto
}
