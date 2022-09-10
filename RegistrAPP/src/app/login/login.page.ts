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
    // let usuario = JSON.parse(localStorage.getItem('usuarioBD'));
    

    if(this.usuario.nombreUsuario==usuarioBD.nombreUsuario){
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'usuario correcto',
        buttons: ['OK'],
      });
  
      await alert.present();
      window.location.href = '/perfil';
    }else{
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }


}
