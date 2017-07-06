import {
  Component,
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
  cmp: any;
  cmpRef: ComponentRef<any>;
  @Input() set component(cmp: any) {
    this.cmp = cmp;
    this.onChangeCompontent();
  }

  get component() {
    return this.cmp;
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private Injector: Injector
  ) { }

  onChangeCompontent() {
    this.cmpRefDestory();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cmp);
    this.cmpRef = this.viewContainerRef.createComponent(componentFactory, this.cmp.length, this.Injector);
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
