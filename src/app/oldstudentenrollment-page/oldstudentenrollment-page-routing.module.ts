import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldstudentenrollmentPagePage } from './oldstudentenrollment-page.page';

const routes: Routes = [
  {
    path: '',
    component: OldstudentenrollmentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldstudentenrollmentPagePageRoutingModule {}
