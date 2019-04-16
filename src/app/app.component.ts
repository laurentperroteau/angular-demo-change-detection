import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

export interface ObjectApp {
  property: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  newRender = false;
  primitive = '1';
  arrayOfPrimitive = ['1', '2', '3'];
  object: ObjectApp = {
    property: '1'
  };
  arrayOfObject: ObjectApp[] = [
    {
      property: '1'
    },
    {
      property: '2'
    }
  ];

  _updateState(type: string) {
    switch (type) {
      case 'primitive-set':
        this.primitive = +this.primitive.charAt(this.primitive.length - 1) + 1 + '';
        break;

      case 'array-primitive-set':
        this.arrayOfPrimitive.push(+this.arrayOfPrimitive[this.arrayOfPrimitive.length - 1] + 1 + '');
        break;

      case 'object-set':
        this.object.property = +this.object.property + 1 + '';
        break;

      case 'item-array-object-set':
        this.arrayOfObject[1].property = +this.arrayOfObject[1].property + 1 + '';
        break;
    }
  }

  get runChangeDetection() {
    console.log('App change detection');
    return true;
  }
}
