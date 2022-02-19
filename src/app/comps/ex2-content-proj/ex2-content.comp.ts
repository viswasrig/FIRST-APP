import {Component, OnInit} from "@angular/core"
import {AdItem} from "./adItem"



import {MyService} from "./myService"

@Component({
    selector:"ex2-cont-proj",
    template:`
                <div class="row col-12">
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">Cognizant</button>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">Google</button>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">Pega</button>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">Microsoft</button>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">Accenture</button>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">Apple</button>
                    </div>
                </div>
        <app-add-banner [listData]="listData" [typeOfComp]="typeOfComp"></app-add-banner>
    `
})
export class Ex2ContentProjectionComponent implements OnInit{
    listData:AdItem[] = []
    typeOfComp:number=1
    constructor(private myService:MyService){
        this.listData=[]
    }

    ngOnInit(){
        this.listData = this.myService.getAds();
    }
}