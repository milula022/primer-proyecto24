import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input e la contraseña
  hide = true;

  //importar/inicializar la interfaz de usuario
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

  //funcion para el registro de nuevos usuarios
  registrar() {
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }


    //enviamos la nueva informacion como un NUEVO OBJETO a la coleccion d usuarios
    this.coleccionUsuarios.push(credenciales)

    //mostramos credenciales por consola
    console.log(credenciales)
    console.log(this.coleccionUsuarios)
  }





}
