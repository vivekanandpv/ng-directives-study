import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPremium]',
})
export class PremiumDirective {
  counter = 100;

  constructor() {}

  @HostListener('click')
  clickHandlerInDirective() {
    alert(this.counter);
  }
}
