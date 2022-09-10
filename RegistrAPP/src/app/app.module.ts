import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule, 
  BrowserAnimationsModule,
  MatIconModule,
  MatTableModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
