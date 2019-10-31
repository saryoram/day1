import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ExpanderComponent} from "./expander.component";
import {tap} from "rxjs/operators";

@Component({
  selector: 'sar-accordion',
  template: `
    <p>
      accordion works!
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements OnInit {

  @ContentChildren(ExpanderComponent) expanders: QueryList<ExpanderComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.expanders.forEach(exp=>{
      exp.openChanged.pipe(
          tap( item => {
            if(item.active){
              this.expanders.forEach( e=> e.active = false)
              item.active = true;
            }
          })
      ).subscribe()
    })
  }
}
