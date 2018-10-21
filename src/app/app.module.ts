import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ClientPage } from '../pages/client/client';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './httpservice.service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientPage
  ],
  providers: [
    StatusBar,
    HTTPService,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
