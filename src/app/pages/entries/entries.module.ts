import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';

import { EntryListComponent } from "./entry-list/entry-list.component";

@NgModule({
  imports: [
    CommonModule,
    EntriesRoutingModule
  ],
  declarations: [EntryListComponent]
})
export class EntriesModule { }
