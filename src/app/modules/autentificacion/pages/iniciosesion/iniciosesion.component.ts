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

  comparar() {
    //  const users = {
    // uid: this.iniciar.uid,
    //  nombre: this.iniciar.nombre,
    //  apellido: this.iniciar.apellido,
    //  email: this.iniciar.email,
    //  password: this.iniciar.password,
    //  rol: this.iniciar.rol
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }

    for (let i = 0; i <= this.datos.length; i++) {
      if (this.datos.length !== (credenciales.uid && credenciales.nombre && credenciales.apellido && credenciales.email && credenciales.password && credenciales.rol)) {
        alert("inicio sesidada")
        break
      }
      else {
        alert("no iniciaste sesion")
        break
      }
    }


  }

}

