import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { RedCardLayoutComponent } from './layouts/red-card-layout/red-card-layout.component';

const routes: Routes = [
   {
    path: '',
    component: HomeComponent
   },
   {
    path: 'RedCardComponent',
   component: RedCardLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
