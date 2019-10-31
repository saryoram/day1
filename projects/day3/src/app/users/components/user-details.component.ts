import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/operators";
import {UsersBlService} from "../services/users-bl.service";

@Component({
  selector: 'app-user-details',
  template: `
    <br><br>
    <div class="container-fluid well span6">
      <div class="row-fluid">
        <div class="span2">
          <img [src]="userDetails.picture.large"
               class="img-circle">
        </div>

        <div class="span8">
          <h3>{{userDetails.name.first}} {{userDetails.name.last}}</h3>
          <h6>Email: {{userDetails.email}}</h6>
          <h6>phone: {{userDetails.phone}}</h6>
          
        </div>

        <div class="span2">
          <div class="btn-group">
            <a class="btn dropdown-toggle btn-info" data-toggle="dropdown" href="#">
              Action
              <span class="icon-cog icon-white"></span><span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#"><span class="icon-wrench"></span> Modify</a></li>
              <li><a href="#"><span class="icon-trash"></span> Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute, private userBl: UsersBlService) {
    route.params.pipe(
        tap( params => this.id = params.id)
    ).subscribe()
  }

  ngOnInit() {
  }

  get userDetails(){
    return this.userBl.users
        .find( user => user.login.username === this.id );
  }

}
