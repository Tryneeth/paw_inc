import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const modules=[
  MatToolbarModule,
  MatButtonModule,

]


@NgModule({
  
  imports: [
    modules,
    CommonModule
  ],
  exports:[
    modules
  ]
})
export class MaterialModule { }
