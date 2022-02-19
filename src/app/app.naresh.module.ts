import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Component Interaction
import {BeginnerEx2Component} from "./beginner/ex2/ex2.comp"
import {BeginnerEx2FirstChildComponent} from "./beginner/ex2/ex2.cf.comp"
import {Ex3Component} from "./beginner/ex3/ex3.comp"

@NgModule({
    declarations: [
        BeginnerEx2Component,
        BeginnerEx2FirstChildComponent, 
        Ex3Component,
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
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppNareshModule { }