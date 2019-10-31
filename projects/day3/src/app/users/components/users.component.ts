import { Component, OnInit } from '@angular/core';
import {UsersBlService} from "../services/users-bl.service";

@Component({
  selector: 'app-users',
  template: `
    <div class="layout">
      <div class="menu">
        <div *ngFor="let user of users"
             [routerLink]="[user.login.username]"
        >
          <img [src]="user.picture.thumbnail">
          {{ user.name.first}} {{ user.name.last }}
        </div>
      </div>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .layout{
      display: grid;
      grid-template-columns: 200px auto;
      height: 100%;
    }
      .menu{
        display: grid;
        grid-auto-rows: minmax(30px,1fr);
        align-items: center;
        //justify-items: center;
      }
  `]
})
export class UsersComponent implements OnInit {

  get users(){ return this.usersBl.users; }

  constructor(private usersBl : UsersBlService) {
    usersBl.getUsers(7);
  }
  ngOnInit() {
  }

}
