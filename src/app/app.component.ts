import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

export interface ObjectApp {
  property: string;
}

@Component({
  selector: 'app-root',
  template: '<app-parent></app-parent>',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
