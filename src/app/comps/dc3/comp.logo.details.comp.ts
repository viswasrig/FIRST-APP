import {Component , Input, 
    ViewContainerRef, 
    ViewChild,
    ComponentFactoryResolver,
    ComponentFactory,
    ComponentRef,
    Type,
    AfterViewInit,
    OnInit
} from "@angular/core";
import {CompanyService, COMPANYIES} from "./companyService"

import {AddHostDC3Directive} from "./addHost.dir"
import {InnerParentComp} from "./dc3.inner.parent.comp"

import {DC3RajaPushpaComponent} from "./rajapushpa/dc3.rp.comp";
import {DC3LndTComponent} from "./lt/dc3.lt.comp";
import {DC3PheonixComponent} from "./pheonix/dc3.phnx.comp";

import * as rajaJson from "./json/raja.pushpa.json"

@Component({
    selector:"comp-logo-details",
    template:`
        <div class="row">
            <div class="col-2" *ngFor ="let item of companyList">
                <button type="button" class="btn btn-primary" (click)="onClickHandler(item)">
                    {{item}}
                </button>
            </div>
        </div>
        <div class="m-y-2"#myDiv addHost>
        </div>
    `
})

export class DC3CompanyLogoDetailsComponent implements OnInit, AfterViewInit{
    @Input() companyList:Array<String|Object>=[];
    selectedItem!:any

    @ViewChild(AddHostDC3Directive,{static:true}) addHost!:AddHostDC3Directive
    viewContainerRef!:ViewContainerRef
    
    constructor(private companyService:CompanyService, private resolver:ComponentFactoryResolver){
        console.log("Hi");
    }

    ngOnInit(){

    }

    ngAfterViewInit(){

    } 
   
    onClickHandler(item:any){
       this.selectedItem = item;

       this.viewContainerRef = this.addHost.viewContainerRef
       this.viewContainerRef.clear();

       const comp = this.getComponent()

       const comRefFactory = this.resolver.resolveComponentFactory<InnerParentComp>(comp)
       const compRef = this.viewContainerRef.createComponent(comRefFactory);
       compRef.instance.data=rajaJson
    }


    getComponent(){
        let component!:Type<InnerParentComp>;
        switch(this.selectedItem){
            case COMPANYIES.RAJA_PUSHPA:{
                component = DC3RajaPushpaComponent
                break;
            }
            case COMPANYIES.L_AND_T:{
                component = DC3LndTComponent
                break;
            }
            case COMPANYIES.APRNA:{
                break;
            }
            case COMPANYIES.HMDA:{
                break;
            }
            case COMPANYIES.PHEONIX:{
                component = DC3PheonixComponent
                break;
            }
        }

        return component;
    }

}


