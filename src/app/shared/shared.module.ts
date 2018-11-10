import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
