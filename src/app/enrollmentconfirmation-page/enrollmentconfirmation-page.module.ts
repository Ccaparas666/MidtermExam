import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentconfirmationPagePageRoutingModule } from './enrollmentconfirmation-page-routing.module';

import { EnrollmentconfirmationPagePage } from './enrollmentconfirmation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentconfirmationPagePageRoutingModule
  ],
  declarations: [EnrollmentconfirmationPagePage]
})
export class EnrollmentconfirmationPagePageModule {}
