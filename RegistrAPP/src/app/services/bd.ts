import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Usuario } from './usuario';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class Bd {
  private storage: SQLiteObject;
  usuarioList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,

  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'db_registrapp.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }
  dbState() {
    return this.isDbReady.value;
  }
 
  fetchSongs(): Observable<Usuario[]> {
    return this.usuarioList.asObservable();
  }
    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/dump.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getUsuarios();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

  // Obtener lista de los usuarios
  getUsuarios(){
    return this.storage.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            nombreUsuario: res.rows.item(i).nombreUsuario,
            nombre: res.rows.item(i).nombre,  
            apellido: res.rows.item(i).apellido,
            password: res.rows.item(i).password,
            correo: res.rows.item(i).correo,
            fechaNacimiento: res.rows.item(i).fechaNacimiento,
            nivelEducacion: res.rows.item(i).nivelEducacion,
            tipoUsuario: res.rows.item(i).tipoUsuario
           });
        }
      }
      this.usuarioList.next(items);
    });
  }
  // Add
  addUsuario(nombreUsuario, nombre, apellido, correo, nivelEducacion, fechaNacimiento, tipoUsuario , password ) {
    let data = [nombreUsuario, nombre, apellido, correo, nivelEducacion, fechaNacimiento, tipoUsuario , password ];
    return this.storage.executeSql('INSERT INTO usuario (nombreUsuario, nombre, apellido, correo, nivelEducacion, fechaNacimiento, tipoUsuario , password) VALUES (?,?,?,?,?,?,?,?)', data)
    .then(res => {
      this.getUsuarios;
      console.log(data)
    });
  }
 
  // Obtener un usuaario en especifico
  getUsuario(id): Promise<Usuario> {
    return this.storage.executeSql('SELECT * FROM usuario WHERE id = ?', [id]).then(res => { 
      return {
            id: res.rows.item(0).id,
            nombreUsuario: res.rows.item(0).nombreUsuario,
            nombre: res.rows.item(0).nombre,  
            apellido: res.rows.item(0).apellido,
            password: res.rows.item(0).password,
            correo: res.rows.item(0).correo,
            fechaNacimiento: res.rows.item(0).fechaNacimiento,
            nivelEducacion: res.rows.item(0).nivelEducacion,
            tipoUsuario: res.rows.item(0).tipoUsuario
      }
    });
  }
  // Update
  updateSong(id, usuario: Usuario) {
    let data = [usuario.id, usuario.nombreUsuario, usuario.nombre, usuario.apellido,usuario.correo,usuario.fechaNacimiento,usuario.nivelEducacion,usuario.tipoUsuario, usuario.password];
    return this.storage.executeSql(`UPDATE usuario SET nombre = ?, apellido = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getUsuarios();
    })
  }
  // Delete
  deleteUsuario(id) {
    return this.storage.executeSql('DELETE FROM usuario WHERE id = ?', [id])
    .then(_ => {
      this.getUsuarios();
    });
  }
}