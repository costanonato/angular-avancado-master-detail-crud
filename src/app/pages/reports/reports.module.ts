import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
