import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  
}
export class Usuario {
  id:number;
  nombre: string;
  apellido: string;  
  nombreUsuario: string;
  password: string;
  curso:string;
  correo:string;
  fechaNacimiento:string;
  private AlertController: AlertController
  

  constructor(id:number,
    nombre: string,
    apellido: string,  
    nombreUsuario: string,
    password: string,
    curso:string,
    correo:string,
    fechaNacimiento:string) {
    this.id=id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreUsuario=nombreUsuario;
    this.password=password;
    this.curso=curso;
    this.correo=correo;
    this.fechaNacimiento=fechaNacimiento;
    
  }

  // public method
  printUserInfo() {
    console.log(`name: ${this.nombre}, apellido: ${this.apellido}`);
  }
}
