import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { Usuario } from '../app.component';
import { Usuarios } from '../app.component';
import { Bd} from '../services/bd'
import { HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private dataBase: Bd
    ) {}
    
    usuario = new Usuario(1,"","","","","","","","");
    usuarioBD= new Usuario(1,"","","","","","","","");


    async presentAlert() {
      if(this.usuario.nombre.length<=0 ||
        this.usuario.nombreUsuario.length<=0 ||
        this.usuario.apellido.length<=0 ||
        this.usuario.nivelEducacion.length <=0 ||
        this.usuario.fechaNacimiento.length<=0 ||
        this.usuario.nombre.length<=0){
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
    this.usuarioBD.nombre = "";
    this.usuarioBD.nombreUsuario = "";
    this.usuarioBD.apellido = "";
    this.usuarioBD.correo = "";
    this.usuarioBD.nivelEducacion = "";
    this.usuarioBD.fechaNacimiento = "";
    this.usuarioBD.curso= "";
    this.usuarioBD.password= "";

  }

  async guardar(){

    if(this.usuarioBD.nombre.length<=0 ||
      this.usuarioBD.apellido.length<=0 ||
      this.usuarioBD.nombreUsuario.length<=0 ||
      this.usuarioBD.nivelEducacion.length <=0 ||
      this.usuarioBD.fechaNacimiento.length<=0 ||
      this.usuarioBD.correo.length<=0){
        
        const alert = await this.alertController.create({
          subHeader: 'Usuario',
          message: 'Error ingrese datos obligatorios',
          buttons: ['OK'],
        });
    
        await alert.present();
    }else{
      const res = await this.loadingCtrl.create({
        message: 'Creando cuenta'
      });
     res.present()

      setTimeout("location.href='/login'", 3000);
      localStorage.setItem('usuarioBD', JSON.stringify(this.usuarioBD));
      this.dataBase.addUsuario(this.usuarioBD.nombreUsuario,
        this.usuarioBD.nombre,
        this.usuarioBD.apellido,
        this.usuarioBD.correo,
        this.usuarioBD.nivelEducacion,
        this.usuarioBD.fechaNacimiento,
        this.usuarioBD.tipoUsuario,
        this.usuarioBD.password
        )
    }

    
  }

  ngOnInit() {
    // this.usuario.nombreUsuario=this.activatedRoute.snapshot.paramMap.get("nombreUsuario");
    console.log('iniciando componente',this.usuario.nombreUsuario)
    console.log(this.dataBase.dbState());
  }
}

