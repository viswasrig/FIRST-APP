import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
    selector:"ex2-app-form",
    templateUrl: "./ex2.comp.html"
})

export class Ex2FormComponent implements OnInit{

    title = 'Angular Form Validation Tutorial';
    angForm!: FormGroup;

    constructor(private fb: FormBuilder) {
     
    }

    ngOnInit(){
        this.createForm();
    }

    createForm(){
       this.angForm = this.fb.group({
           color:['', Validators.required,Validators.minLength, Validators.maxLength],
           food: ['', Validators.required ]
       })
    }
}