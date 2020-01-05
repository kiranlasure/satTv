import { NgModule } from '@angular/core';

import {
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
   } from '@angular/material';
const moduleList = [
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
];
@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
