import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'myaccount', component:MyaccountComponent},
  {path: 'newpost', component:NewpostComponent},
  {path: 'postdetail/:id', component:PostdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
