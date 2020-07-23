import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAccountsRoutingModule } from './admin-accounts-routing.module';
import { DsComponent } from './dashboard/ds/ds.component';
import { TsComponent } from './transaction/ts/ts.component';
import { RsComponent } from './reports/rs/rs.component';
import { MsComponent } from './master/ms/ms.component';



@NgModule({
  declarations: [DsComponent, TsComponent, RsComponent, MsComponent],
  imports: [
    CommonModule,
    AdminAccountsRoutingModule
  ]
})
export class AdminAccountsModule { }
