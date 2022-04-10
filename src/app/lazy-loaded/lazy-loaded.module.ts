import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingRoutingModule } from './lazy-loaded-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LazyLoadedModule { }
