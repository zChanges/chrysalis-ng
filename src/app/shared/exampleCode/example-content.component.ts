import {
  Component,
  Type,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  ComponentRef
} from '@angular/core';


@Component({
  selector: 'ch-example-content',
  template: ''
})
export class ExampleContentComponent implements OnDestroy {
  cmp: Type<any>;
  cmpRef: ComponentRef<any>;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }


  @Input() set component(cmp: Type<any>) {
    this.cmp = cmp;
    this.onChangeCompontent();
  }

  get component() {
    return this.cmp;
  }

  onChangeCompontent() {
    this.cmpRefDestory();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cmp);
    this.cmpRef = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, this.injector);
    this.cmpRef.changeDetectorRef.markForCheck();
  }

  ngOnDestroy() {
    this.cmpRefDestory();
  }

  cmpRefDestory() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
