import {Component, OnInit, DoCheck, Input} from "@angular/core";
import {CompanyService} from "../companyService"
import {InnerParentComp} from "../dc3.inner.parent.comp"

@Component({
    selector:"dc3-lt",
    templateUrl:"./dc3.lt.comp.html",
    styleUrls:['./dc3.lt.comp.css']
})

export class DC3LndTComponent implements InnerParentComp, OnInit, DoCheck{

    @Input() data !:any
    constructor(private companyService:CompanyService){}

    ngOnInit(){
    }

    ngDoCheck(){}
}


