import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { SecondNavbarComponent } from './navigation/second-navbar/second-navbar.component';
import { CardsComponent } from './cards/cards.component';
import { RedCardLayoutComponent } from './layouts/red-card-layout/red-card-layout.component';
import { HomeComponent } from './layouts/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SecondNavbarComponent,
    CardsComponent,
    RedCardLayoutComponent,
    HomeComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
