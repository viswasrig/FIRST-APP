import {Component, OnInit, DoCheck, Input} from "@angular/core";
import {CompanyService} from "../companyService"
import {InnerParentComp} from "../dc3.inner.parent.comp"

@Component({
    selector:"dc3-phnx",
    templateUrl:`./dc3.phnx.comp.html`,
    styleUrls:['./dc3.phnx.comp.css']
})

export class DC3PheonixComponent implements InnerParentComp, OnInit, DoCheck{

    @Input() data !:any
    constructor(private companyService:CompanyService){}

    ngOnInit(){
    }

    ngDoCheck(){}
}


