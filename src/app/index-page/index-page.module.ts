import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPagePageRoutingModule } from './index-page-routing.module';

import { IndexPagePage } from './index-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPagePageRoutingModule
  ],
  declarations: [IndexPagePage]
})
export class IndexPagePageModule {}
