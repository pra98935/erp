import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFieldComponent } from './form-field/form-field.component';

const routes: Routes = [
  {path:'', component: FormFieldComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
