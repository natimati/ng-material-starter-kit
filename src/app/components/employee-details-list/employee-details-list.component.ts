import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details-list',
  templateUrl: './employee-details-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsListComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {
  }
}
