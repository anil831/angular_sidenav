import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MultiStepComponent } from './forms/multi-step/multi-step.component';
import { DynamicForm1Component } from './forms/dynamic-form1/dynamic-form1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';


const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"sidenav1",component:SidenavComponent,children:[
    { path: "", redirectTo: "dashboard", pathMatch: "full" }, // default child route
    { path: "dashboard", component: DashboardComponent },
    { path: "dashboard2", component: Dashboard2Component },
    { path: "multi-step-form", component:MultiStepComponent },
    { path: "dynamic-form1", component:DynamicForm1Component}
  ]},
  {path:"sidenav2",component:Sidenav2Component},
  // {path:"dashboard",component:DashboardComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
