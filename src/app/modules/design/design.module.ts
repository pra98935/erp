import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
