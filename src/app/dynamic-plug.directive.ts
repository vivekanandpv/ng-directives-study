import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicPlug]',
})
export class DynamicPlugDirective {
  constructor(public hostContainer: ViewContainerRef) {}
}
