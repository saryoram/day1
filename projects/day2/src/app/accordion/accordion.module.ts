import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import {AppComponent} from "../app.component";
import {ExpanderComponent} from "./expander.component";



@NgModule({
  declarations: [
      AccordionComponent,
      ExpanderComponent
  ],
  exports:[
    AccordionComponent,
    ExpanderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccordionModule { }
