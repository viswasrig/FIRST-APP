import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
    selector:'[addHost]'
})
export class AddHostDC3Directive{

    constructor(public viewContainerRef:ViewContainerRef){}
}