import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

export interface ObjectApp {
  property: string;
}

@Component({
  selector: 'app-parent',
  template: `
    <div class="lifes-ctn">
      <div class="lifes lifes--grand-parent">
        <div class="lifes__name">
          <h2>Parent</h2>
        </div>
        <div class="lifes__name">
          <button (click)="_updateState('primitive-set')">
            udpate primitive
          </button>
          <button (click)="_updateState('array-primitive-set')">
            update array-primitive
          </button>
          <button (click)="_updateState('object-set')">
            update object
          </button>
          <button (click)="_updateState('item-array-object-set')">
            udpate item in array of object
          </button>
        </div>
        <br />
        <div class="lifes__inner">
          <div>
            <h3>this (props et state)</h3>
            <pre class="layout__item u-1/2-lap-and-up">
{{primitive}}
              {{arrayOfPrimitive | json }}
              {{object | json}}
              {{arrayOfObject | json}}
</pre>
          </div>
        </div>
      </div>
      <app-child
        [primitive]="primitive"
        [arrayOfPrimitive]="arrayOfPrimitive"
        [object]="object"
        [arrayOfObject]="arrayOfObject"
      ></app-child>
    </div>
    {{runChangeDetection}}
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush // TODO: active OnPush to see diference
})
export class ParentComponent {
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
