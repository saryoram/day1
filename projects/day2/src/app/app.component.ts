import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Day2</h1>
      <sar-accordion>
            <sar-expander title="expander 1">
              content expander 1<br> text....<br> text....
            </sar-expander>
            <sar-expander title="expander 2">
              content expander 2<br> text....<br> text....
            </sar-expander>
      </sar-accordion>
      
      
      <sar-tabs>
        <sar-panel title="tab 1">1</sar-panel>
        <sar-panel title="tab 2">2</sar-panel>
        <sar-panel title="tab 3"><sar-tabs>
          <sar-panel title="tab 1">1</sar-panel>
          <sar-panel title="tab 2">2</sar-panel>
          <sar-panel title="tab 3">3</sar-panel>
        </sar-tabs></sar-panel>
      </sar-tabs>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'day2';
}
