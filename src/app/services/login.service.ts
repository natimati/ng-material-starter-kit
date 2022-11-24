import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  login(user: {username: string, password: string}): Observable<UserModel> {
    return this._httpClient.post<UserModel>('https://fakestoreapi.com/auth/login', user);
  }
}
