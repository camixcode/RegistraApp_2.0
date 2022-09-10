import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../app.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute
    ) {}
   usuarioBD = JSON.parse(localStorage.getItem('usuarioBD'));
  ngOnInit() {
  }

}
