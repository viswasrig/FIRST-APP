import {Component} from "@angular/core";

@Component({
    selector:'ex1-content-pr1',
    template:`
        <h1>This is Component HTML </h1>
        <ng-content></ng-content>
        <ng-content [select]="q1"></ng-content>
        <ng-content [select]="q2"></ng-content>
        <ng-content [select]="q3"></ng-content>
        
    `
})

export class Ex1ContentProjection{}