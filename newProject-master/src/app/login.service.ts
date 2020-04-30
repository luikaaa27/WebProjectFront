import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse, SignUpResponse, User} from './models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  logged = false;

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
  signUp(username, password, email): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.BASE_URL}/api/register/`, {
      username,
      password,
      email
    });
  }
  getUser(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/api/user/profile/`);
  }
  putUser(username, email): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/api/user/profile/`, {
      username,
      email
    });
  }
}
