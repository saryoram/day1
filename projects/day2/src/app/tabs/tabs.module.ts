import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent} from "./src/tabs.component";
import {SarPanelComponent} from "./src/sar-panel.component";



@NgModule({
  declarations: [
      TabsComponent,
    SarPanelComponent],
  exports: [TabsComponent,
    SarPanelComponent],
  imports: [
    CommonModule
  ]
})
export class TabsModule { }
