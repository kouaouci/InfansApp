import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ErrorHandler,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ConnexionPage } from './connexion/connexion.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from 'src/Authentification/CORE/log.interceptor';


@NgModule({
  declarations: [AppComponent,ConnexionPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
 { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide: HTTP_INTERCEPTORS,
useClass: LoginInterceptor,
multi:true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
