import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPagePage } from './index-page.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPagePageRoutingModule {}
