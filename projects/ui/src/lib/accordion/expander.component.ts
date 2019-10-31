import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sar-expander',
  template: `
    <div>
      <div (click)="toggle()">{{title}}</div>
      <ng-content *ngIf="active"></ng-content>
    </div>
  `,
  styles: []
})
export class ExpanderComponent implements OnInit {

  @Input() title:string;
  @Input() active:boolean = false;
  @Output() openChanged = new EventEmitter<ExpanderComponent>()

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.active = !this.active;
    this.openChanged.emit(this);
  }

}
