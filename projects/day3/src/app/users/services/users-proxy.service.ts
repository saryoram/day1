import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersProxyService {

  constructor(private http: HttpClient) { }


  getUsers(num:number = 1) : Promise<Isar.User[]>{
    return this.http.get<Isar.RootObject>(`https://randomuser.me/api/?gender=male&nat=us&results=${num}`)
        .pipe(
            map( req => req.results )
        )
        .toPromise();
  }
}
