import {Component, Input, OnInit} from "@angular/core"

import {AdComponent} from "./ad.comp"

@Component({
    selector:'',
    template:`
    <div class="job-ad">
    <h3>Featured Cognizant Company</h3>
        <h4>{{data.name}}</h4>
        {{data.proffession}}
    </div>
    `
})

export class CognizantAdComponent implements AdComponent, OnInit{
    @Input() data!:any

    ngOnInit(){
        
    }
}