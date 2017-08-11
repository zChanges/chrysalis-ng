import { Injectable, ComponentRef, Inject, ComponentFactoryResolver, Injector } from '@angular/core';
import { ChLoadingComponent } from './ch-loading.component';
import { chrysalisConfig } from './../chrysalis-config';

@Injectable()
export class ChLoadingService {

    // chLoadingCmp: ComponentRef<ChLoadingComponent>;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private Injector: Injector,
        private chrysalisConfig: chrysalisConfig
    ) { }

    start() {
        // this.createLoading();
    }

    createLoading() {
        // const rootContainer = this.chrysalisConfig.rootContainer;
        // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChLoadingComponent);
        // this.chLoadingCmp = rootContainer.createComponent(componentFactory, ChLoadingComponent.length, this.Injector);
        // const cmp = this.chLoadingCmp.instance;
    }
    close() {
        // if (this.chLoadingCmp) {
        //     this.chLoadingCmp.destroy();
        // }
    }
}