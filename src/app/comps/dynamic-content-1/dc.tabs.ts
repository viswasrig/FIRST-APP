import {Component, Input} from "@angular/core"

@Component({
    selector:"my-tab",
    template: `
    <h2>Tabs</h2>
    <div *ngFor="let tab of tabs">
      <dcl-wrapper [type]="tab"></dcl-wrapper>
    </div>
  `
  })
  export class Tabs {
    @Input() tabs!:any;
  }
  