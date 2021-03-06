import { Type } from '@angular/core';

export class TopicBase {
  constructor(public component: Type<any>, public data: any) {}
}
