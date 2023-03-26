import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewtransferPageRoutingModule } from './newtransfer-routing.module';

import { NewtransferPage } from './newtransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewtransferPageRoutingModule
  ],
  declarations: [NewtransferPage]
})
export class NewtransferPageModule {}
