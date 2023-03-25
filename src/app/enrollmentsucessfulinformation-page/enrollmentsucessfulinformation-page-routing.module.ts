import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentsucessfulinformationPagePage } from './enrollmentsucessfulinformation-page.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentsucessfulinformationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentsucessfulinformationPagePageRoutingModule {}
