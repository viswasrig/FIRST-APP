import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {Ex1FormComponent} from "./forms/ex1/ex1.comp"
import {Ex2FormComponent} from "./forms/ex2/ex2.comp";
import {Ex3FormComponent} from "./forms/ex3/ex3.comp"


// Content Projection
import {Ex1ContentProjection} from "./comps/ex1/ex1.comp"

import {Ex2ContentProjectionComponent} from "./comps/ex2-content-proj/ex2-content.comp"
import {AppAddBannerComponent} from "./comps/ex2-content-proj/app-add-banner.comp"
import {AdHostDirective} from "./comps/ex2-content-proj/ad.dir"
import {CognizantAdComponent} from "./comps/ex2-content-proj/cognizant.comp"
import {InfosysAdComponent} from "./comps/ex2-content-proj/infosys.comp"
import {MyService} from "./comps/ex2-content-proj/myService"

// dynamic-content
import {DclWrapper} from "./comps/dynamic-content-1/dcl.wrapper.comp"
import {Tabs} from "./comps/dynamic-content-1/dc.tabs"
import {DynamicLoaderMainComponent, C1, C2, C3} from "./comps/dynamic-content-1/dc.comp"

import {DC2LoadMainComponent} from "./comps/dc-2/dc2.main.comp"
import {MessageComponent} from "./comps/dc-2/mes.comp"
// Dc3 -Content

import {DC3MainComponent} from "./comps/dc3/dc3.main.comp"
import {DC3CompanyLogoDetailsComponent} from "./comps/dc3/comp.logo.details.comp"
import {CompanyService} from "./comps/dc3/companyService"

import {AddHostDC3Directive} from "./comps/dc3/addHost.dir"
import {DC3RajaPushpaComponent} from "./comps/dc3/rajapushpa/dc3.rp.comp"
import {DC3PheonixComponent} from "./comps/dc3/pheonix/dc3.phnx.comp"
import {DC3LndTComponent} from "./comps/dc3/lt/dc3.lt.comp"


@NgModule({
  declarations: [
    Ex3FormComponent,
    Ex2FormComponent,
    Ex1FormComponent,
    // Content Projection Components,
    Ex1ContentProjection,
    Ex2ContentProjectionComponent,
    AppAddBannerComponent,
    AdHostDirective,
    CognizantAdComponent,
    InfosysAdComponent,
    DclWrapper,
    Tabs,
    DynamicLoaderMainComponent, C1, C2, C3,
    DC2LoadMainComponent,
    MessageComponent,
    DC3MainComponent,
    DC3CompanyLogoDetailsComponent,
    AddHostDC3Directive,
    DC3RajaPushpaComponent,
    DC3PheonixComponent,
    DC3LndTComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [MyService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
