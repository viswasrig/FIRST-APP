import {Component, Input} from "@angular/core"

@Component({
    selector:'dc-msg',
    template:`
        <h2>{{message}}</h2>
    `
})
export class MessageComponent{
    @Input() message!: string;
}