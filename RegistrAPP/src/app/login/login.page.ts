import { Component, OnInit } from '@angular/core';
import { Usuario } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  usuario = new Usuario(1,"","","","","","");

  ngOnInit() {
  }
  ingresar(){
    console.log(this.usuario.nombreUsuario)
    localStorage.setItem('usuario', JSON.stringify(this.usuario))
  }

}
