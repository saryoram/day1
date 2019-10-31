import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subject, zip} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'sar-save-questionnaire',
  template: `
    <div>
      <h3> Save Demo Status : {{status}}</h3>
      <input #search><br>
      <button #saveBtn>Save</button>
      <button (click)="onSentResult()">send result</button>
      <pre>
        {{ saveResult }}
      </pre>
      <pre>
        {{ resultString }}
      </pre>

      <hr>
    </div>
  `,
  styles: []
})
export class SaveQuestionnaireComponent implements OnInit {
  status:string = 'free';
  @ViewChild('search',{static : true}) inputSearch :ElementRef;
  @ViewChild('saveBtn',{static : true}) saveBtn :ElementRef;

  save$ : Observable<string>;

  private _serverResult = new Subject<string>();
  serverResult$ = this._serverResult.asObservable().pipe(
      tap( val => this.resultString+= ` ${val}`)
  );

  demo : any[];
  saveResult:string;
  resultString:string;

  constructor() { }

  ngOnInit() {
    this.createSavePipe(this.saveBtn.nativeElement);
  }

  createSavePipe( btn : HTMLButtonElement ){
    this.save$ = fromEvent(btn,'click').pipe(
        map( ev => this.inputSearch.nativeElement.value as string ),
        tap( word => this.saveResult += ` ${word}`)
    );



    zip( this.save$ , this.serverResult$ )
        .pipe(
            tap( x => this.status = 'busy'),
            switchMap( word  => this.createItems2( word[0]) ),
            tap( x => this.status = 'free'),
            tap( items => {
              this._serverResult.next(items);
              console.log(`zip`);
            })
        ).subscribe();

    this._serverResult.next('-1');

  }


  createItems2( word :string ) : Observable<string>{
    return new Observable( observer => {
      let index = 0;
      //setTimeout( ()=>{
      ///observer.next(word)
      this.observer = observer;
      // },3000)
    })
  }
  observer;

  onSentResult() {
    this.observer.next('123');
    // this.observer.c
  }
}
