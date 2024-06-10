import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificacion 
import { AuthService } from '../../services/auth.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input e la contraseña
  hide = true;
//************************************************** importaciones de 'interfaz usuario'*/
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
  //**********************************************************fin */
constructor(
  public servicioAuth:AuthService,
  public servicioRutas:Router
){}
  //funcion para el registro de nuevos usuarios
  registrar() {
    //constante credenciales va a resguardar la informacion que ingrese el usuario
   /* const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }*/
    const credenciales = {
      email:this.usuarios.email,
      password:this.usuarios.password
    }


    //enviamos la nueva informacion como un NUEVO OBJETO a la coleccion d usuarios
    //this.coleccionUsuarios.push(credenciales)

    //llamamos a la funcion para ejecutarla
    this.limpiarInputs();


    //mostramos credenciales por consola
    //console.log(credenciales)
    //console.log(this.coleccionUsuarios)
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
    alert("Te registraste con exito")
  }





}
