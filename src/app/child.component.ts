import { Component } from '@angular/core';

let renderForce = 0;
let primitiveCount = 1;
let arrayOfObjectCount = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ChildComponent {
  newRender = false;
  primitive = 'primitive-v' + primitiveCount;
  arrayOfPrimitive = ['1', '2', '3'];
  object = {
    property: 'property-v1'
  };
  arrayOfObject = [
    {
      key: '1'
    },
    {
      key: arrayOfObjectCount + ''
    }
  ];

  _updateState(type: string) {
    switch (type) {
      case 'primitive-set':
        primitiveCount++;
        this.primitive = 'primitive-v' + primitiveCount;
        break;
      case 'array-primitive-set':
        this.arrayOfPrimitive = this.arrayOfPrimitive.map(item => (+item) + 1 + '');
        break;

      case 'item-array-object-set':
        arrayOfObjectCount++;
        this.arrayOfObject[1].key = arrayOfObjectCount + '';
        break;
    }
  }

  get runChangeDetection() {
    this.newRender = true;

    setTimeout(() => {
      this.newRender = false;
    }, 1000);

    return '';
  }
}
