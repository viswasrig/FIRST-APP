import {Component,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory
} from "@angular/core";

import {MessageComponent} from "./mes.comp"

@Component({
    selector:'dc-b',
    template:`
        <div class="text-center">
            <h1>Welcome to {{title}}</h1>

            <button (click)="createComponent('Welcome Foo ! ')">Welcome</button>
            <button (click)="createComponent('Foo Again ?')">Not Welcome</button>
            <ng-template #messageContainer></ng-template>
        </div>
    `
})
export class DC2LoadMainComponent{
    title="App";
    @ViewChild('messageContainer',{read:ViewContainerRef}) entry!:ViewContainerRef;
    componentRef!:ComponentRef<MessageComponent>;
    constructor(private resolver:ComponentFactoryResolver){}

    createComponent(message:any){
        this.entry.clear();
        const factory:ComponentFactory<MessageComponent> = this.resolver.resolveComponentFactory(MessageComponent)
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.message = message;
    }

    destroyComponent() {
        this.componentRef.destroy();
    }
}
