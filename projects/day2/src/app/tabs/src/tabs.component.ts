import { Component, OnInit, ContentChildren, QueryList  } from '@angular/core';
import {SarPanelComponent} from "./sar-panel.component";

@Component({
  selector: 'sar-tabs',
  styles: [],
  template: `
    <div class="tabs-layout">
      <div class="tabs">
        <span *ngFor="let panel of panels" 
              (click)="setActive(panel)"
                [class.active]="panel.active">
          {{panel.title}}
        </span>
      </div>
      <div class="panels">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TabsComponent implements OnInit {

  @ContentChildren(SarPanelComponent) panels:QueryList<SarPanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  setActive(panel : SarPanelComponent){
    this.panels.forEach( p => p.active = false);
    panel.active = true;
  }

}
