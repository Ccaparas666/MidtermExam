import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index-page',
    loadChildren: () => import('./index-page/index-page.module').then( m => m.IndexPagePageModule)
  },
  {
    path: 'settings-page',
    loadChildren: () => import('./settings-page/settings-page.module').then( m => m.SettingsPagePageModule)
  },
  {
    path: 'studentstatus-page',
    loadChildren: () => import('./studentstatus-page/studentstatus-page.module').then( m => m.StudentstatusPagePageModule)
  },
  {
    path: 'newandtransferstudentsenrollment-page',
    loadChildren: () => import('./newandtransferstudentsenrollment-page/newandtransferstudentsenrollment-page.module').then( m => m.NewandtransferstudentsenrollmentPagePageModule)
  },
  {
    path: 'oldstudentenrollment-page',
    loadChildren: () => import('./oldstudentenrollment-page/oldstudentenrollment-page.module').then( m => m.OldstudentenrollmentPagePageModule)
  },
  {
    path: 'enrollmentconfirmation-page',
    loadChildren: () => import('./enrollmentconfirmation-page/enrollmentconfirmation-page.module').then( m => m.EnrollmentconfirmationPagePageModule)
  },
  {
    path: 'enrollmentsucessfulinformation-page',
    loadChildren: () => import('./enrollmentsucessfulinformation-page/enrollmentsucessfulinformation-page.module').then( m => m.EnrollmentsucessfulinformationPagePageModule)
  },
  {
    path: 'newtransfer',
    loadChildren: () => import('./newtransfer/newtransfer.module').then( m => m.NewtransferPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
