import { Injectable, ComponentRef, Inject, ComponentFactoryResolver, ViewContainerRef, Injector } from '@angular/core';
import { ChLoadingComponent } from './ch-loading.component';
@Injectable()
export class ChLoadingService {

    chLoadingCmp: ComponentRef<ChLoadingComponent>;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private Injector: Injector
    ) { }

    start() {
        this.createLoading();
    }

    createLoading() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChLoadingComponent);
        this.chLoadingCmp = this.viewContainerRef.createComponent(componentFactory, ChLoadingComponent.length, this.Injector);
        const cmp = this.chLoadingCmp.instance;
    }
    close() {
        if (this.chLoadingCmp) {
            this.chLoadingCmp.destroy();
        }
    }
}