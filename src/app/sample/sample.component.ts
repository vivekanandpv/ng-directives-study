import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() template!: TemplateRef<any>;

  person = {
    firstName: 'Vinayak',
    currentCity: 'Mumbai',
  };

  constructor() {}

  ngOnInit(): void {}
}
