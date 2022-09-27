import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { SecondNavbarComponent } from './navigation/second-navbar/second-navbar.component';
import { CardsComponent } from './cards/cards.component';
import { RedCardLayoutComponent } from './layouts/red-card-layout/red-card-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SecondNavbarComponent,
    CardsComponent,
    RedCardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
