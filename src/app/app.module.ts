import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterRoutingModule} from './router/router-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { ItemComponent } from './components/item/item.component';
import {MaterialModule} from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    MainViewComponent,
    PdpComponent,
    ItemComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterRoutingModule,
    MaterialModule
  ],
  entryComponents: [MainViewComponent,LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
