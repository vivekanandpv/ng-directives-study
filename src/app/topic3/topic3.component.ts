import { Component, Input, OnInit } from '@angular/core';
import { Topic, TopicData } from '../models/Topic';

@Component({
  selector: 'app-topic3',
  templateUrl: './topic3.component.html',
  styleUrls: ['./topic3.component.scss'],
})
export class Topic3Component implements OnInit, Topic {
  @Input() data!: TopicData;

  constructor() {}

  ngOnInit(): void {}
}
