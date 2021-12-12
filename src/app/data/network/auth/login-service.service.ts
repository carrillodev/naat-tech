import { Injectable } from '@angular/core';

// Http
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

// Constants & environment
import { TIME_OUT } from 'src/app/portal/utils/appConstants';
import { environment } from 'src/environments/environment';
import { LoginResponse, RefreshTokenResponse } from '../../models/response/login/loginResponse';
import { LoginRequest, RefreshTokenRequest } from '../../models/request/login/loginRequest';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  // URL & endpoints
  private baseURL = environment.baseUrl;
  private msPath = environment.microServicePath;
  private endPoints = environment.endPoint;

  constructor(private http: HttpClient) {}

  public postLogin(authCode: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.msPath.authentication + this.endPoints.login, authCode)
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public postRefresh(refreshToken: RefreshTokenRequest): Observable<RefreshTokenResponse> {
    return this.http
      .post<RefreshTokenResponse>(this.msPath.authentication + this.endPoints.refresh, refreshToken)
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
