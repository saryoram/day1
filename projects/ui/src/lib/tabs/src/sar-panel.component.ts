import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sar-panel',
  styles: [],
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `
})
export class SarPanelComponent implements OnInit {

  @Input() title:string;
  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
