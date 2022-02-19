import {Injectable} from "@angular/core";
import {AdItem} from "./adItem"

import {CognizantAdComponent} from "./cognizant.comp";
import {InfosysAdComponent} from "./infosys.comp";

@Injectable()
export class MyService{
    getAds(){
        return[
            new AdItem( CognizantAdComponent,{name:"Harish", proffession:"Sr Software Enginner"}),
            new AdItem(InfosysAdComponent, {name:"Narish", proffession:"Sr Software Enginner"}),
            new AdItem(CognizantAdComponent, {name:"Vamshi", proffession:"Hi"}),
            new AdItem(InfosysAdComponent, {name:"Madhu", proffession:"Hello"}),
            new AdItem(CognizantAdComponent, {name:"Len", proffession:"Good"}),
            new AdItem(InfosysAdComponent, {name:"Devudu", proffession:"Sr Software Enginner"}),
            new AdItem(CognizantAdComponent, {name:"Latin", proffession:"My Data Enginner"})
        ]
    }
}
