import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },
  {
    path:'nav',
    component:NavComponent
  },
  
  
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
