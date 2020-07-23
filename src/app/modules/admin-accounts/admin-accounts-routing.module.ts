import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsComponent } from './dashboard/ds/ds.component';
import { TsComponent } from './transaction/ts/ts.component';
import { RsComponent } from './reports/rs/rs.component';
import { MsComponent } from './master/ms/ms.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAccountsRoutingModule { }
