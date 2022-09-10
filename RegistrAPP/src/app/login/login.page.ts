import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute
  ) { }
  usuario = new Usuario(1,"","","","","","","");
  usuarioBD = new Usuario(1,"","","","","","","");



  ngOnInit() {
  }
  
  async ingresar() {

    let usuarioBD = JSON.parse(localStorage.getItem('usuarioBD'));
    console.log(usuarioBD);
 
    
  }

}
