import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import {AbstractControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  create(employee: { name: any; salary: any; age: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "age">> | null }): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>('https://fakestoreapi.com/products', employee);
  }
}
