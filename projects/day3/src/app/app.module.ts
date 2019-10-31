import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/components/users.component';
import { HomeComponent } from './components/home.component';
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './users/components/user-details.component';
import { UserDetailsEditComponent } from './users/components/user-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    UserDetailsComponent,
    UserDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot([])
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
