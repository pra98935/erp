import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineryRoutingModule } from './machinery-routing.module';
import { MsComponent } from './master/ms/ms.component';
import { DsComponent } from './dashboard/ds/ds.component';
import { RsComponent } from './reports/rs/rs.component';
import { TsComponent } from './transaction/ts/ts.component';


@NgModule({
  declarations: [MsComponent, DsComponent, RsComponent, TsComponent],
  imports: [
    CommonModule,
    MachineryRoutingModule
  ]
})
export class MachineryModule { }
