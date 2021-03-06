import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  active = true;

  constructor() {
    setInterval(() => {
      this.active = !this.active;
    }, 1000);
  }
}
