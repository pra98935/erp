import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalLeftComponent } from './layout/portal-left/portal-left.component';
import { PortalTopComponent } from './layout/portal-top/portal-top.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PortalLeftComponent,
    PortalTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
