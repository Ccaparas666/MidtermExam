import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewtransferPage } from './newtransfer.page';

const routes: Routes = [
  {
    path: '',
    component: NewtransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewtransferPageRoutingModule {}
