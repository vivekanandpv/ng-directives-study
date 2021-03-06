import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolderComponent } from './holder/holder.component';
import { Topic1Component } from './topic1/topic1.component';
import { Topic2Component } from './topic2/topic2.component';
import { Topic3Component } from './topic3/topic3.component';
import { DynamicPlugDirective } from './dynamic-plug.directive';

@NgModule({
  declarations: [
    AppComponent,
    HolderComponent,
    Topic1Component,
    Topic2Component,
    Topic3Component,
    DynamicPlugDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
