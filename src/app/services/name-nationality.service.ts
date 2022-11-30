import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NameNationalityModel } from '../models/name-nationality.model';

@Injectable()
export class NameNationalityService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name: string): Observable<NameNationalityModel> {
    return this._httpClient.get<NameNationalityModel>(`https://api.nationalize.io?name=${name}`);
  }
}
