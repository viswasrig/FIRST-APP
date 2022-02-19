import {Component, ComponentRef, Input, 
    ViewContainerRef,ComponentFactory, ComponentFactoryResolver, ViewChild} from '@angular/core'

@Component({
    selector: 'dcl-wrapper',
    template: `<div #target></div>`
})
export class DclWrapper {
    @ViewChild('target', {read: ViewContainerRef}) target:any;
    @Input() type:any;
    cmpRef!:ComponentRef<any>;
    private isViewInitialized:boolean = false;

    constructor(private resolver: ComponentFactoryResolver) {}

    updateComponent = ()=>{
        if(!this.isViewInitialized) {
            return;
        }

        if(this.cmpRef) {
            this.cmpRef.destroy();
        }

        const factory:ComponentFactory<any>=this.resolver.resolveComponentFactory(this.type)
        this.cmpRef = this.target.createComponent(factory)
    }

    ngOnChanges() {
        this.updateComponent();
    }
    
    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();  
    }
    
    ngOnDestroy() {
        if(this.cmpRef) {
            this.cmpRef.destroy();
        }    
    }

}