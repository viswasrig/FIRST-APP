import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";


@Component({
    selector:"ex1-app-form",
    templateUrl: "./ex1.comp.html"
})

export class Ex1FormComponent implements OnInit{

    favoriteColorControl = new FormControl('');

    constructor(){}

    ngOnInit(){
        this.favoriteColorControl.setValue("red")
    }
}