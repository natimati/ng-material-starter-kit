import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgForOf} from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, AsyncPipe, NgForOf, MatButtonModule, CommonModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
