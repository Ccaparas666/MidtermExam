import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentstatusPagePageRoutingModule } from './studentstatus-page-routing.module';

import { StudentstatusPagePage } from './studentstatus-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentstatusPagePageRoutingModule
  ],
  declarations: [StudentstatusPagePage]
})
export class StudentstatusPagePageModule {}
