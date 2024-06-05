import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;

  public datos: Usuario[];
  constructor() {
    this.datos = [
      {
        uid: "12323",
        nombre: "juab",
        apellido: "perez",
        email: "juabperez@gmail.com",
        password: "12345",
        rol: "visitante"
      },
      {
        uid: "12344",
        nombre: "franco",
        apellido: "cifuentes",
        email: "francocifuentes@gmail.com",
        password: "12345",
        rol: "visitante"
      },
      {
        uid: "12345",
        nombre: "emilia",
        apellido: "perez",
        email: "emiliaperez@gmail.com",
        password: "12345",
        rol: "admi"
      }

    ]
  }

  usuarios: Usuario = {
    uid: '',//inicializamos con comilla simple porque es de STRING
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: ''

  }
  //creamos coleccion de usuarios, tipo 'usuario' para arrays
  coleccionUsuarios: Usuario[] = [];

  compara() {

    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }
    //repetitiva para recorrer la coleccion de usuarios locales(datos)
    for (let i = 0; i <= this.datos.length; i++) {
      //usuario local corresponde a esa posicion en especifico 
      const userLocal = this.datos[i]
      if
        (userLocal.nombre === credenciales.nombre && userLocal.apellido === credenciales.apellido && userLocal.email === credenciales.email && userLocal.password === credenciales.password) {
        alert("inicio sesidada")
        break
      }
      else {
        alert("no iniciaste sesion")
        break
      }
    }

  }
    //funcion para vaciar los input
    limpiarInputs(){
      const inputs={
        //en constante inputs llamamos a los atributos y los inicializamos como vacios (string = '', number = 0)
        uid: this.usuarios.uid = '',
        nombre: this.usuarios.nombre = '',
        apellido: this.usuarios.apellido = '',
        email: this.usuarios.email = '',
        password: this.usuarios.password= '',
        rol: this.usuarios.rol= ''
  
      }   
 
    }

}

