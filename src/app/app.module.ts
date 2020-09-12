import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NewpostComponent } from './newpost/newpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyaccountComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
