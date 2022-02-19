import {Type} from "@angular/core"
import {InnerParentComp} from "./dc3.inner.parent.comp"

export class AddItem{
    constructor(public component:Type<InnerParentComp>, public data:any){}
}