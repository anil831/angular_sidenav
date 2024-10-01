import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SidenavComponent } from './sidenav/sidenav.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';

import { FlexLayoutModule } from "@angular/flex-layout";

import { NgChartsModule } from 'ng2-charts';
import { MultiStepComponent } from './forms/multi-step/multi-step.component';
import { DynamicForm1Component } from './forms/dynamic-form1/dynamic-form1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Sidenav2Component,
    NavbarComponent,
    DashboardComponent,
    CardComponent,
    MultiStepComponent,
    DynamicForm1Component,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
