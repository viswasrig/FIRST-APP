import {Component} from "@angular/core";

@Component({
    selector:"dc-a",
    template:`
    <h2>Hello {{name}}</h2>
    <my-tab [tabs]="types"></my-tab>
    `
})
export class DynamicLoaderMainComponent{
    types = [C3, C1, C2, C3, C3, C1, C1];
    name ="Custom tabs"
}


@Component({
    selector: 'c1',
    template: `<h2>c1</h2>`
    
  })
  export class C1 {
  }
  
  @Component({
    selector: 'c2',
    template: `<h2>c2</h2>`
    
  })
  export class C2 {
  }
  
  @Component({
    selector: 'c3',
    template: `<h2>c3</h2>`
    
  })
  export class C3 {
  }