import { Component, Input, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver } 
from '@angular/core';

import {AdItem} from "./adItem"
import {AdHostDirective} from './ad.dir'
import {AdComponent} from "./ad.comp"
import {MyService} from "./myService"

@Component({
    selector:"app-add-banner",
    template:`
    <div class="ad-banner-example">
        <h3>Advertisements</h3>
        <ng-template adHost></ng-template>
    </div>
    `
})

export class AppAddBannerComponent implements OnDestroy, AfterViewInit{

    @Input() listData :AdItem[] =[]

    @Input() typeOfComp :number=-1
    @ViewChild(AdHostDirective, {static:true}) adHost!:AdHostDirective

    interval!:number|undefined
    constructor(private resolver: ComponentFactoryResolver){}
     ngAfterViewInit(){
        this.loadComponent();
        this.getAllEmployDetailsDisplay()
     }

     ngOnDestroy(){

     }

     getAllEmployDetailsDisplay =()=>{
        this.interval=setInterval(()=>{
            this.loadComponent()
        }, 2000)
     }



     loadComponent = ()=>{
         const idex = Math.floor(Math.random()*this.listData.length)
         const adItem = this.listData[idex];

         const viewContainerRef=  this.adHost.viewContainerRef;
         viewContainerRef.clear();

         const factory = this.resolver.resolveComponentFactory<AdComponent>(adItem.component)
         const addedComponent = viewContainerRef.createComponent(factory)
         addedComponent.instance.data= adItem.data;
     }

}