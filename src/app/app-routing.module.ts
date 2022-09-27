import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedCardLayoutComponent } from './layouts/red-card-layout/red-card-layout.component';

const routes: Routes = [
  {path: 'RedCardComponent', component: RedCardLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
