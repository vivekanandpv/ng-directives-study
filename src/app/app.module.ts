import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import { PremiumDirective } from './premium.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DemoComponent,
    PremiumDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
