import { Injectable } from '@angular/core';
//cloud firestore -> accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /*definimos de forma privada la coleccion de usuarios para que no sea accesible en toda la aplicacion. lo definimos como una coleccion de firestore que respete la estructura de nuestra interfaz 'usuario' */

  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    /*usuariosCollection va a ingresar la nueva coleccion usuarios que esta en nuestra bgase de datos */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario: Usuario, id: string) {
    //generamos una nueva promesa y utiliza los metodos:
    //resolve: promesa resuelta -> funciona correctamente
   // reject: promesa rechazada -> ocurrio una falla 
   

    return new Promise(async (resolve, reject) => {
      /*const resultado = coleccion de usuarios, envia como numero de documento el uid y setea la informacion que ingresamos en el formulario de registro*/
      
      try {
        //bloque try encapsula la logica resuelta
        usuario.uid = id;
        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        resolve(resultado);
        //bloque catch encapsula la logica RECHAZADA
      } catch (error){
    //captura una falla y la vuelve un 'error'
        reject(error);
      }
    })
  }
}
