import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentsucessfulinformationPagePageRoutingModule } from './enrollmentsucessfulinformation-page-routing.module';

import { EnrollmentsucessfulinformationPagePage } from './enrollmentsucessfulinformation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentsucessfulinformationPagePageRoutingModule
  ],
  declarations: [EnrollmentsucessfulinformationPagePage]
})
export class EnrollmentsucessfulinformationPagePageModule {}
