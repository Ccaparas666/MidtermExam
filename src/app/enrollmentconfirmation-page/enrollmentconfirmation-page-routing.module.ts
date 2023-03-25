import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentconfirmationPagePage } from './enrollmentconfirmation-page.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentconfirmationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentconfirmationPagePageRoutingModule {}
