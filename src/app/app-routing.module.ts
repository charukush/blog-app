import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NewpostComponent } from './newpost/newpost.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'myaccount', component:MyaccountComponent},
  {path: 'newpost', component:NewpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
