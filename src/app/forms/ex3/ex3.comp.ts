import {Component, OnInit} from "@angular/core";

@Component({
    selector:"app-ngb-login",
    templateUrl:'./ex3.comp.html',
    styleUrls:['./ex3.comp.css']
})
export class Ex3FormComponent implements OnInit{
    selectedTab:number;
    constructor(){
        this.selectedTab =1;
    }

    ngOnInit(){

    }

    selectTab(tab:any){
        this.selectedTab =tab;
    }
}