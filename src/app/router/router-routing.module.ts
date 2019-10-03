import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { MainViewComponent } from '../components/main-view/main-view.component';
import { PdpComponent } from '../components/pdp/pdp.component';


export const routes: Routes = [
  {path: "", component: LandingComponent, pathMatch: "full"},
  {path: "home", component: MainViewComponent},
  {path:"product", component: PdpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
