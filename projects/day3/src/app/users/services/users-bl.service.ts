import { Injectable } from '@angular/core';
import {UsersProxyService} from "./users-proxy.service";

@Injectable({
  providedIn: 'root'
})
export class UsersBlService {

  users: Isar.User[];


  constructor(private proxy: UsersProxyService) {
  }

  async getUsers(num:number) {
    this.users = await this.proxy.getUsers(num);
  }
}
