import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserNationalityComponent } from './user-nationality.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [UserNationalityComponent],
  providers: [],
  exports: [UserNationalityComponent]
})
export class UserNationalityComponentModule {
}
