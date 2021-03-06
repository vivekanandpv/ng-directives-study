import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DynamicPlugDirective } from '../dynamic-plug.directive';
import { Topic } from '../models/Topic';
import { TopicBase } from '../models/TopicBase';
import { Topic1Component } from '../topic1/topic1.component';
import { Topic2Component } from '../topic2/topic2.component';
import { Topic3Component } from '../topic3/topic3.component';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss'],
})
export class HolderComponent implements OnInit {
  private currentIndex = 0;

  @Input() topics: TopicBase[] = [
    new TopicBase(Topic1Component, {
      title: 'title 1',
      description: 'description 1',
    }),
    new TopicBase(Topic2Component, {
      title: 'title 2',
      description: 'description 2',
    }),
    new TopicBase(Topic3Component, {
      title: 'title 3',
      description: 'description 3',
    }),
  ];

  @ViewChild(DynamicPlugDirective, { static: true })
  dirRef!: DynamicPlugDirective;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  generateComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(
      this.topics[this.currentIndex].component
    );

    const viewContainerRef = this.dirRef.hostContainer;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<Topic>(
      componentFactory
    );

    componentRef.instance.data = this.topics[this.currentIndex].data;

    if (this.currentIndex < 2) {
      ++this.currentIndex;
    } else {
      this.currentIndex = 0;
    }
  }

  shuffle() {
    this.generateComponent();
  }
}
