import { Component } from '@angular/core';
import {delay, switchMap, take, tap} from 'rxjs/operators';
import {of, Subject, zip} from 'rxjs';



export interface ISaveArg {
  WhatThen?: string;
  func?: any;
  funcWhenErr?: any;
}


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>Hello {{title}}!</h1>
    <p>
      Start editing to see some magic happen :)
    </p>
    <button (click)=save()>save</button>
  `
})
export class AppComponent {
  title = 'zip';
  name = 'Angular';
  queue = new Subject(); //.pipe(delay(2500), tap(a => this.save()));
  result = new Subject();
  queue$;



  constructor(){
    /*const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    const sourceThree = of('Goodbye');
    const sourceFour = of('World!');
//wait until all observables have emitted a value then emit all as an array

    const example = zip(
        sourceOne,
        sourceTwo.pipe(delay(2500), tap(a => this.save())),
        sourceThree.pipe(delay(2000)),
        sourceFour.pipe(delay(3000))
    );*/
//output: ["Hello", "World!", "Goodbye", "World!"]
    //const subscribe = example.subscribe(val => console.log(val));

    // this.result.next('start');
    // this.queue.next('start2');
    //this.queue$ = zip(this.result, this.queue);
    this.queue$ = zip(this.result, this.queue).pipe(
        //map( ([r, z]) => ({r, z = this.saveQuestionnaire1(z).pipe(take(1)) })),
        //switchMap((r, z) => this.saveQuestionnaire1(z).pipe(take(1))),
        tap( () => console.log('zip run')),
        //tap(a => this.save1(a[1])),
        switchMap(a => this.saveQuestionnaire1(a[1])), //.pipe(take(1))),
        delay(2500),
        tap( resp => this.result.next(resp))
    );

    const subscribeSave = this.queue$.subscribe((val) => {console.log('queue$.subscribe' + val)}, (error) => console.error(error));
    this.result.next('start');
    this.queue.next('start2');
  }

  saveQuestionnaire1(sa: ISaveArg) {

    console.log(sa.WhatThen);

    if (false) {
      console.error('saveInProcess');
      return null;
    } else {
      console.log('save Not InProcess');
    }
  }
  save() {
    const sa: ISaveArg = {  WhatThen: 'add questionnaire',
      func: () => { },
      funcWhenErr: null
    };

    this.queue.next(sa);
    console.log('save done');
    //return 'save';
    this.result.next('start');
    // this.queue.next('start2');
  }

  save1(a) {
    console.log(a);
    return 'save';
  }
}

