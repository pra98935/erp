import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'design',
    pathMatch: 'full'
  },
  {
    path: 'design',
    loadChildren: () => import('./modules/design/design.module').then(m => m.DesignModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
