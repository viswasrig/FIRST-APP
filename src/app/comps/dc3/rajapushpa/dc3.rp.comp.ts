import {Component, OnInit, DoCheck, Input} from "@angular/core";
import {CompanyService} from "../companyService"
import {InnerParentComp} from "../dc3.inner.parent.comp"

@Component({
    selector:"dc3-rp",
    templateUrl:"./dc3.rp.comp.html",
    styleUrls:['./dc3.rp.comp.css']
})

export class DC3RajaPushpaComponent implements InnerParentComp, OnInit, DoCheck{

    @Input() data !:any
    constructor(private companyService:CompanyService){}

    ngOnInit(){
    }

    ngDoCheck(){}
}


