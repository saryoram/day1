import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaveQuestionnaireComponent } from './save-questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveQuestionnaireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
