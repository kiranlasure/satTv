import { NgModule } from '@angular/core';

import {
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
   } from '@angular/material';
const moduleList = [
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
];
@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
