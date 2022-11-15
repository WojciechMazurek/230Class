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
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SecondNavbarComponent,
    CardsComponent,
    RedCardLayoutComponent,
    HomeComponent,
    HttpComponent,
    AddItemComponent
  ],
  imports: [
    // ng add @angular/fire
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
