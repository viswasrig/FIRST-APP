import {Type} from "@angular/core"
import {AdComponent} from "./ad.comp"

export class AdItem{
    constructor(public component:Type<AdComponent>, public data:any){}
}