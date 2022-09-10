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

  usuarioBD = JSON.parse(localStorage.getItem('usuarioBD'));

  
}

