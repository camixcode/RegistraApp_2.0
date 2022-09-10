import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rcontrasenia',
  templateUrl: './rcontrasenia.page.html',
  styleUrls: ['./rcontrasenia.page.scss'],
})
export class RContraseniaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  limpiar(){
    this.usuario.nombre = ""
  
  }
  
  async guardar(){
    localStorage.setItem('usuarioBD', JSON.stringify(this.usuarioBD));
    const alert = await this.alertController.create({
      subHeader: 'Usuario',
      message: 'cuenta creada exitosamente',
      buttons: ['OK'],
    });
  
    await alert.present();
  }

}

