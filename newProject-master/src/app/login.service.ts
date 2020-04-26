import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse, SignUpResponse} from './models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  logged = false;

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
  signUp(username, password): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.BASE_URL}/api/signup/`, {
      username,
      password
    });
  }
}
