import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './constants/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: Constants.ADMIN_ACCOUNTS_URL,
    pathMatch: 'full'
  },
  {
    path: 'design',
    loadChildren: () => import('./modules/design/design.module').then(m => m.DesignModule)
  },
  {
    path: Constants.ADMIN_ACCOUNTS_URL,
    loadChildren: () => import('./modules/admin-accounts/admin-accounts.module').then(m => m.AdminAccountsModule)
  },
  {
    path: Constants.MACHINERY_URL,
    loadChildren: () => import('./modules/machinery/machinery.module').then(m => m.MachineryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
