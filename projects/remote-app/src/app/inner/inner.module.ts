import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    InnerRoutingModule
  ]
})
export class InnerModule { }
