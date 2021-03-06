import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  @Input() index = 0;

  constructor() {}

  ngOnInit(): void {}
}
