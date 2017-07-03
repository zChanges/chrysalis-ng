import { Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ng-template[chTabTitle]]'
})
export class TabTitleDirective {

  constructor(private templateRef: TemplateRef<any>) { }

}