import {Component} from "@angular/core";

@Component({
    selector:'b-ex2',
    templateUrl:'./ex2.comp.html'
})
export class BeginnerEx2Component{
    pValue:number = 10;
    updatedValue = -1

    constructor(){
        /* setInterval(()=>{
            this.pValue = Math.floor(Math.random()*100)
        }, 1000) */
    }

    getValueFromChild(valueFromChild:number){
        this.updatedValue = valueFromChild
    }
}