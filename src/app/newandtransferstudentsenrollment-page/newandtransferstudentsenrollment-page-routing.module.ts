import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewandtransferstudentsenrollmentPagePage } from './newandtransferstudentsenrollment-page.page';

const routes: Routes = [
  {
    path: '',
    component: NewandtransferstudentsenrollmentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewandtransferstudentsenrollmentPagePageRoutingModule {}
