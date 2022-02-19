import {Component, OnInit} from "@angular/core";
import {CompanyService} from "./companyService"

@Component({
    selector:"dc3-main",
    template:`
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="text-center">Dynamic Content Loading</h4>
                        <comp-logo-details [companyList]="list"></comp-logo-details>
                    </div>
                </div>
            </div>
    `
})

export class DC3MainComponent implements OnInit{

    list:Array<String|Object>=[];
    constructor(private companyService:CompanyService){

    }

    ngOnInit(){
      this.list = this.companyService.getCompanyNames()
    }
}


