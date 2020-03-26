import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {
   path: "" ,
   redirectTo: "/login" ,
   component: LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // the routes are passed to routermodule via forroot
  exports: [RouterModule]
})
export class AppRoutingModule { }
