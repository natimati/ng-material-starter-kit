import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { EmployeeDetailsListComponent } from './employee-details-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [EmployeeDetailsListComponent],
  providers: [],
  exports: [EmployeeDetailsListComponent]
})
export class EmployeeDetailsListComponentModule {
}
