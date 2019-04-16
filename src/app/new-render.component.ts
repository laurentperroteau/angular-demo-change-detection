import { OnChanges, Input, Component } from '@angular/core';

@Component({
  selector: 'new-render',
  template: `
    <span [style.color]="red">
      <span *ngIf="newRender">nouveau rendu...</span>
      <span *ngIf="!newRender">...</span>
    </span>
  `
})
export class NewRenderComponent implements OnChanges {
  @Input() newRender = false;

  ngOnChanges() {
    setTimeout(() => {
      this.newRender = false;
    }, 1000);
  }
}
