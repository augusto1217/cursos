import { AuthRequest } from './../../models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from './../../models/interfaces/user/auth/AuthResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = enviroment.API_URL;

  constructor(private http: HttpClient) {}

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    );
  }

  authUser(requestData: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestData);
  }
}
