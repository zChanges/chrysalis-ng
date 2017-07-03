import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ng-template[chTabContent]]'
})
export class TabContentDirective {

  constructor(private templateRef: TemplateRef<any>) { }

}