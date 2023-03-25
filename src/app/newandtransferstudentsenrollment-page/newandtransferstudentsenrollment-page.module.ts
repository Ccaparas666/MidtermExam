import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewandtransferstudentsenrollmentPagePageRoutingModule } from './newandtransferstudentsenrollment-page-routing.module';

import { NewandtransferstudentsenrollmentPagePage } from './newandtransferstudentsenrollment-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewandtransferstudentsenrollmentPagePageRoutingModule
  ],
  declarations: [NewandtransferstudentsenrollmentPagePage]
})
export class NewandtransferstudentsenrollmentPagePageModule {}
