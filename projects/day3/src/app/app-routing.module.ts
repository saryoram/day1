import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {UsersComponent} from "./users/components/users.component";
import {UserDetailsComponent} from "./users/components/user-details.component";


const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full'},
  { path : 'home' , component : HomeComponent },
  {
    path : 'users',
    component : UsersComponent,
    children : [
      { path : ':id' , component : UserDetailsComponent}
    ]
  },
  { path : '**' , redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
