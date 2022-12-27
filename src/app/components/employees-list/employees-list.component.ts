import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {combineLatest, Observable, Subject, of, map} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent {
  public ageCategories: Observable<string[]> = of(['All', '0-20', '21-30', '31-40', '41-50', '51-100']);
  private _ageCategorySubject: Subject<string> = new Subject<string>();
  public ageCategory$: Observable<string> = this._ageCategorySubject.asObservable()
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.ageCategory$
  ]).pipe(
    map(([employees, ageCategory] : [EmployeeModel[], string]) => {
      if(ageCategory === 'All') return employees;
      const [from, to] = ageCategory.split('-')
      return employees.filter(employee =>
        employee.employee_age >= Number(from) && employee.employee_age <= Number(to) )
    })
  )

  constructor(private _employeeService: EmployeeService) {
  }
}
