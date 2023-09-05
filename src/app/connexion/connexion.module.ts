import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { ConnexionPageRoutingModule } from './connexion-routing.module';

import { ConnexionPage } from './connexion.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule,
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
