import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute
    ) {}
    
    usuario = new Usuario(1,"","","","","","","");


    async presentAlert() {
      if(this.usuario.nombre.length<=0){
        const alert = await this.alertController.create({
          subHeader: 'Usuario',
          message: 'Error campos invalidos',
          buttons: ['OK'],
        });
    
        await alert.present();
      }else{
        const alert = await this.alertController.create({
          subHeader: 'Usuario',
          message: 'Su nombre es '+this.usuario.nombre+" "+this.usuario.apellido,
          buttons: ['OK'],
        });
    
        await alert.present();
      }
    }
  

  limpiar(){
    this.usuario.nombre = ""

  }

  async guardar(){
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    const alert = await this.alertController.create({
      subHeader: 'Usuario',
      message: 'cuenta creada exitosamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.usuario.nombreUsuario=this.activatedRoute.snapshot.paramMap.get("nombreUsuario");
    console.log(this.usuario.nombreUsuario)
  }
}

