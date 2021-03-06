import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { PremiumDirective } from '../premium.directive';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent
  implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('h3') header!: ElementRef<any>;

  constructor() {}

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log(this.header);
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {}

  handler() {}
}
