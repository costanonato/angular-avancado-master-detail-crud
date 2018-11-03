import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { EntriesRoutingModule } from './entries-routing.module';

import { EntryListComponent } from "./entry-list/entry-list.component";
import { EntryFormComponent } from "./entry-form/entry-form.component";

@NgModule({
  imports: [
    CommonModule,
    EntriesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EntryListComponent, EntryFormComponent]
})
export class EntriesModule { }
