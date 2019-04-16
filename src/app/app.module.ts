import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewRenderComponent } from './new-render.component';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRenderComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
