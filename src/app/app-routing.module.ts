import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './layouts/home/home.component';
import { RedCardLayoutComponent } from './layouts/red-card-layout/red-card-layout.component';

const routes: Routes = [
   {
    path: '',
    component: HomeComponent
   },
   {
    path: 'admin',
    component: AddItemComponent
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
