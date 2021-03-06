import { Component, Input, OnInit } from '@angular/core';
import { Topic, TopicData } from '../models/Topic';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.scss'],
})
export class Topic2Component implements OnInit, Topic {
  @Input() data!: TopicData;

  constructor() {}

  ngOnInit(): void {}
}
