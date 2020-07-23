import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsComponent } from './master/ms/ms.component';
import { DsComponent } from './dashboard/ds/ds.component';
import { RsComponent } from './reports/rs/rs.component';
import { TsComponent } from './transaction/ts/ts.component';

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
export class MachineryRoutingModule { }
