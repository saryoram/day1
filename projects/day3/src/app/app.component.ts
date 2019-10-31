import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .layout{
      display: grid;
      grid-template-rows: 50px auto 25px;
      grid-row-gap: 8px;
      width: 95%;
      height: 95vh;
      border: 1px solid black;
    }
    .toolbar{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      align-items: center;
      justify-items: center;
    }
    .main{
      border: 1px solid black;
      margin: 3px;
    }  
  `],
  template: `
    <div class="layout">
      <div class="toolbar">
        <a routerLink="/home">Home</a>
        <a routerLink="/users">Users</a>
      </div>
      <div class="main">
        <router-outlet></router-outlet>
      </div>
      <div class="footer">
        date : 24-10-2019
      </div>
    </div>  
`})
export class AppComponent {
  title = 'day3';
}
