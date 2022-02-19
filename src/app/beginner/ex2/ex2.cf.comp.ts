import {Component, Input, OnInit, Output, EventEmitter, DoCheck} from "@angular/core";

@Component({
    selector:'b-ex2-cf',
    templateUrl:'./ex2.cf.comp.html'
})
export class BeginnerEx2FirstChildComponent implements OnInit,DoCheck{
   @Input() cValue!:number;
   @Output() outValue:EventEmitter<any> = new EventEmitter()
    previousValue!:number;
    updatedValue!:number
    counter:Array<number>=[]
    constructor(){
        this.counter.push(1)
    } 

    ngOnInit(){
        this.previousValue = -1
        this.updatedValue = this.cValue;
        this.calcuteInterest(); // function call /method call
        this.counter.push(2)
    }

    ngDoCheck(){
        this.calcuteInterest();
    }



    calcuteInterest(){
        this.previousValue = this.updatedValue;
        this.updatedValue = ((this.cValue * 5*10000)/100)
        this.outValue.emit(this.updatedValue)
    }
}