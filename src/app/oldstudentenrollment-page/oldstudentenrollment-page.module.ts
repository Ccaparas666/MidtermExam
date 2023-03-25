import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldstudentenrollmentPagePageRoutingModule } from './oldstudentenrollment-page-routing.module';

import { OldstudentenrollmentPagePage } from './oldstudentenrollment-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldstudentenrollmentPagePageRoutingModule
  ],
  declarations: [OldstudentenrollmentPagePage]
})
export class OldstudentenrollmentPagePageModule {}
