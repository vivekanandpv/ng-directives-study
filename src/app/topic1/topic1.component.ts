import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Topic, TopicData } from '../models/Topic';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.scss'],
})
export class Topic1Component implements OnInit, Topic, OnDestroy {
  @Input() data!: TopicData;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('Topic 1 Destroyed');
  }
}
